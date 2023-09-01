import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';


const AddShitBtnComponent = () => {

  return(
      <View style={styles.addShitBtnView}>
        <Icon.Button iconStyle={{marginRight: 0}} borderRadius={100} size={60} name='pluscircle' style={styles.addShitBtn}/>
      </View>
  )
}

const styles = StyleSheet.create({
  addShitBtnView:{
    position: 'absolute',
    bottom: 45,
    right: 45,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addShitBtn: {
    fontSize: 30,
    borderRadius: 30,
    backgroundColor: '#452745',
    borderColor: '#452745',
    borderWidth: 2
  }
})
export default AddShitBtnComponent