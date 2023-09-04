import React from 'react'
import { View, StyleSheet, Image, StatusBar } from 'react-native'


const StatusBarComponent = () => {

  return(
      <View style={styles.statusBar}>
        <Image source={require('../../res/img/status_bar_title_offwhite.png')} style={styles.statusBarImg}/>
      </View>
  )
}

const styles = StyleSheet.create({
  statusBar: {
    flex: 5,
    backgroundColor: '#9b89b3',
    alignItems: 'center',
    paddingTop: 4
  },
  statusBarImg: {
    flex: 5,
  }
})
export default StatusBarComponent