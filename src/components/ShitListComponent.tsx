import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { format, compareAsc } from "date-fns";

type shitListEntry = {
  date: Date;
  title: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item_title: {
    fontSize: 22,
    height: 44,
    paddingLeft: 10,
    paddingTop: 5,
  },
  item_date: {
    fontSize: 18,
    height: 44,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom:0
  },
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
  return compareAsc(a.date, b.date);
};

const renderShitListEntry = ( entry: shitListEntry ) => {
  return (
      <View>
        <Text style={styles.item_title}>{entry.title}</Text>
        <Text style={styles.item_date}>Shittapointment: {format(entry.date, 'yyyy-MM-dd')}</Text>
      </View>
    );
};

const ShitListComponent = (props: any) => {
  
  const data = props.shitList.sort(compShitListEntries);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => renderShitListEntry(item)}
        keyExtractor={item => format(item.date, 'yyyy-MM-dd')}
        ItemSeparatorComponent={FlatListItemSeparator}
      />
    </View>
  );
};



export default ShitListComponent;