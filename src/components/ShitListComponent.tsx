import React , {useState} from 'react';
import { FlatList, StyleSheet, Text, View, RefreshControl, TouchableOpacity } from 'react-native';
import { format, compareDesc, compareAsc } from "date-fns";
import Entypo from 'react-native-vector-icons/Entypo';
import { shitwiseDB, channel } from './supabaseConfig';
import JsonToShitappointmentObj from "../helper";
import myName from "../helper";


type shitListEntry = {
  dateBegin: Date | undefined;
  dateEnd: Date | undefined;
  name: string;
};

const styles = StyleSheet.create({
  shitListContainer: {
    backgroundColor: '#9b89b3',
    flex: 1,
    paddingTop: 20,
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black'
  },
  itemDate: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  itemMoreBtn: {
    flex: 1,
    marginLeft: 5,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  itemMoreIcon:{
    fontSize: 39,
    color: '#845ec2',
  },
  shitListEntryContainer: {
    backgroundColor: '#fef7ff',
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 7,
    padding:13,
    flexDirection:'row',
  }
});


const compShitListEntries = ( a: shitListEntry, b: shitListEntry ) => {
  a.dateBegin ??= new Date(), 'dd.MM.yyyy';
  b.dateBegin ??= new Date(), 'dd.MM.yyyy';
  return compareAsc(a.dateBegin, b.dateBegin);
};

const renderShitListEntry = ( entry: shitListEntry, navigation: any ) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ShitListEntryScreen', {entry})}>
      <View style={styles.shitListEntryContainer}>
        <View>
          <Text style={styles.itemTitle}>{entry.name}</Text>
          <Text style={styles.itemDate}>Shittapointment: {format(entry.dateBegin ??= new Date(), 'dd.MM.yyyy')}</Text>
        </View>
        <View style={styles.itemMoreBtn}>
          <Entypo name="chevron-right" style={styles.itemMoreIcon} />
        </View>
      </View>
    </TouchableOpacity>
    );
};

const ShitListComponent = (props: any) => {
  
  const [refreshing, setRefreshing] = useState(false);
  let data = props.shitList.lenght > 0 ? props.shitList.sort(compShitListEntries) : props.shitList;
  let setList = props.setList
  let navigation = props.navigationObj

  const onRefresh = async () => {
    
    setRefreshing(true);

    let { data: shittapointments, error } = await shitwiseDB
    .from('shittapointments')
    .select('*')

    if (shittapointments) {

      let latestShitList: shitListEntry[] = [];

      for(var shittapointment of shittapointments){

        latestShitList.push({dateBegin: new Date(shittapointment['begin']), dateEnd: new Date(shittapointment['end']), name: shittapointment['name']})
      }

      setList(latestShitList)

    }


    setTimeout(function(){ setRefreshing(false) }, 1);
  };
  
  return (
    <View style={styles.shitListContainer}>
      <FlatList
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        //extraData={refreshing}
        data={data}
        renderItem={({item}) => renderShitListEntry(item, navigation)}
        keyExtractor={item => item.dateBegin}
      />
    </View>
  );
};



export default ShitListComponent;