import React, { useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import NextShitterComponent from '../components/NextShitterComponent'
import ShitListComponent from '../components/ShitListComponent'
import { compareDesc } from 'date-fns'
import AddShitBtnComponent from '../components/AddShitBtnComponent'
import StatusBarComponent from '../components/StatusBarComponent'
import 'react-native-url-polyfill/auto'
import { shitwiseDB } from '../components/supabaseConfig'


type shitListEntry = {
  dateBegin: Date | undefined;
  dateEnd: Date | undefined;
  name: string;
};

const compShitListEntries = ( a: shitListEntry, b: shitListEntry ) => {
  a.dateBegin ??= new Date()
  b.dateBegin ??= new Date()
  return compareDesc(a.dateBegin, b.dateBegin);
};

export const channel = shitwiseDB
  .channel('schema-db-changes')
  .on('postgres_changes', { event: 'INSERT', schema: 'public'}, (payload) => 
  console.log('payload')
  ).subscribe()


const myName = "bARBS";


const HomeScreen = ({navigation}: {navigation: any}) => {

  const [data, setData] = useState<shitListEntry[]>([
    {
      dateBegin: new Date(1995, 6, 2),
      dateEnd: new Date(1995, 6, 5),
      name: 'Yoyo',
    }
  ]);

  const addToList = (shittapointment: shitListEntry) => {
    // Update the state with the new item
    setData((prevData) => [...prevData, shittapointment]);
    console.log(data)
  };

  return(
    <View style={styles.container}>
      <StatusBarComponent/>
      <View style={styles.nextShitterDisplay}>
        <NextShitterComponent shitList = {data.sort(compShitListEntries)}/>
      </View>
      <View style={styles.shitListDisplay}>
        <ShitListComponent shitList = {data.sort(compShitListEntries)} setList = {setData} navigationObj = {navigation}/>
      </View>
      <AddShitBtnComponent myName = {myName} addToList = {addToList}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  nextShitterDisplay: {
    flex: 35
  },
  shitListDisplay: {
    flex: 65
  }
})
export default HomeScreen