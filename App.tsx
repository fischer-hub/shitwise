import React from 'react'
import { View, StyleSheet } from 'react-native'
import NextShitterComponent from './src/components/NextShitterComponent'
import ShitListComponent from './src/components/ShitListComponent'
import { compareAsc } from 'date-fns'


type shitListEntry = {
  date: Date;
  title: string;
};

const compShitListEntries = ( a: shitListEntry, b: shitListEntry ) => {
  return compareAsc(a.date, b.date);
};

const DATA = [
  {
    date: new Date(1995, 6, 2),
    title: 'Yoyo',
  },
  {
    date: new Date(2023, 7, 2),
    title: 'Kerst',
  },
  {
    date: new Date(2024, 8, 2),
    title: 'Lulu',
  },
  {
    date: new Date(2012, 9, 9),
    title: 'Lali',
  },
];

const App = () => {

  return(
    <View style={styles.container}>
      <NextShitterComponent shitList = {DATA.sort(compShitListEntries)}/>
      <ShitListComponent shitList = {DATA.sort(compShitListEntries)}/>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App