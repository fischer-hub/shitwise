import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { format, compareDesc } from "date-fns";
import Entypo from 'react-native-vector-icons/Entypo';

type shitListEntry = {
  date: Date;
  title: string;
};

const styles = StyleSheet.create({
  shitListContainer: {
    backgroundColor: '#8e518d',
    flex: 1,
    paddingTop: 20,
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8e518d'
  },
  itemDate: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8e518d'
  },
  itemMoreBtn: {
    flex: 1,
    marginLeft: 5,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  itemMoreIcon:{
    fontSize: 39,
    color: '#824a81',
  },
  shitListEntryContainer: {
    backgroundColor: '#f7c7db',
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 7,
    padding:13,
    flexDirection:'row',
  }
});

const FlatListItemSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#000",
      }}
    />
  );
}


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
        //ItemSeparatorComponent={FlatListItemSeparator}
      />
    </View>
  );
};



export default ShitListComponent;