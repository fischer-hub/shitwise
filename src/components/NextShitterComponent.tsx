import React from 'react';
import {Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { format, closestIndexTo, isBefore } from 'date-fns'

import ShitListComponent from './ShitListComponent'

type shitListEntry = {
  date: Date;
  title: string;
};

const getNextShitter = ( shitListSorted: shitListEntry[] ) => {
  const currentDate = new Date();
  const dateList = shitListSorted.map(entry => entry.date);
  var closest_idx = closestIndexTo(currentDate, dateList);
  
  if(closest_idx !== undefined){
    if(isBefore(shitListSorted[closest_idx].date, currentDate)){
      closest_idx++;
    }
  }
  else{
    return {date: new Date(1969, 4, 20), title: 'No shit appointments registered yet.'}
  }
  console.log("closestidx: ",closest_idx)
  return shitListSorted[closest_idx];
};

const NextShitterComponent = (props: any) => {

  const data = props.shitList;

  return (
    <SafeAreaView style={styles.wrapper}>
      <View
        style={styles.container}>
        <Text>Next shitter is: {getNextShitter(data).title}!</Text>
        <Text>Shit reserved for {format(getNextShitter(data).date, 'dd.MM.yyyy')}!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  wrapper: {
    flex: 1
 },

  container: {
     backgroundColor: 'orange',
     flex: 1,
     alignItems: 'center'
  }
          
})

export default NextShitterComponent;