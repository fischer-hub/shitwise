import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { format, compareAsc } from "date-fns";
//import DatePicker from 'react-native-datepicker'

type shitListEntry = {
  date: Date;
  title: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const compShitListEntries = ( a: shitListEntry, b: shitListEntry ) => {
  return compareAsc(a.date, b.date);
};

const ShitListComponent = (props: any) => {
  
  const data = props.shitList.sort(compShitListEntries);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Text style={styles.item}>{item.title}, {format(item.date, 'yyyy-MM-dd')}</Text>}
        keyExtractor={item => format(item.date, 'yyyy-MM-dd')}
      />
    </View>
  );
};



export default ShitListComponent;