import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { format, compareDesc } from "date-fns";
import Entypo from 'react-native-vector-icons/Entypo';
import { channel } from './supabaseConfig'

type shitListEntry = {
  date: Date;
  title: string;
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
  return compareDesc(a.date, b.date);
};

const renderShitListEntry = ( entry: shitListEntry ) => {
  return (
      <View style={styles.shitListEntryContainer}>
        <View>
          <Text style={styles.itemTitle}>{entry.title}</Text>
          <Text style={styles.itemDate}>Shittapointment: {format(entry.date, 'dd.MM.yyyy')}</Text>
        </View>
        <View style={styles.itemMoreBtn}>
          <Entypo name="chevron-right" style={styles.itemMoreIcon} />
        </View>
      </View>
    );
};

const ShitListComponent = (props: any) => {
  
  const data = props.shitList.sort(compShitListEntries);
  return (
    <View style={styles.shitListContainer}>
      <FlatList
        data={data}
        renderItem={({item}) => renderShitListEntry(item)}
        keyExtractor={item => format(item.date, 'yyyy-MM-dd')}
      />
    </View>
  );
};



export default ShitListComponent;