import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import NextShitterComponent from './src/components/NextShitterComponent'
import ShitListComponent from './src/components/ShitListComponent'
import { compareAsc } from 'date-fns'
import AddShitBtnComponent from './src/components/AddShitBtnComponent'
import StatusBarComponent from './src/components/StatusBarComponent'
import 'react-native-url-polyfill/auto'
import { shitwiseDB } from './src/components/supabaseConfig'


type shitListEntry = {
  dateBegin: Date | undefined;
  dateEnd: Date | undefined;
  name: string;
};

const compShitListEntries = ( a: shitListEntry, b: shitListEntry ) => {
  a.dateBegin ??= new Date()
  b.dateBegin ??= new Date()
  return compareAsc(a.dateBegin, b.dateBegin);
};


export const channel = shitwiseDB.channel('schema-db-changes').on('postgres_changes', { event: 'INSERT', schema: 'public'}, (payload) => 
  console.log(payload)
  ).subscribe()

const DATA = [
  {
    dateBegin: new Date(1995, 6, 2),
    dateEnd: new Date(1995, 6, 5),
    name: 'Yoyi',
  },
];

const App = () => {

  return(
    <View style={styles.container}>
      <StatusBarComponent/>
      <View style={styles.nextShitterDisplay}>
        <NextShitterComponent shitList = {DATA.sort(compShitListEntries)}/>
      </View>
      <View style={styles.shitListDisplay}>
        <ShitListComponent shitList = {DATA.sort(compShitListEntries)}/>
      </View>
      <AddShitBtnComponent/>
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
export default App