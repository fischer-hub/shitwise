import React, {useState} from 'react';
import { Modal, StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';



const AddShitBtnComponent = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View>
      <Modal animationType="slide" transparent={false} visible={modalVisible} onRequestClose={() => setModalVisible(false)} presentationStyle='pageSheet'>
        <View style={styles.centeredView}>
            <Text>Modal Content</Text>
            <Button title='close' onPress={() => setModalVisible(false)}></Button>
        </View>
      </Modal>
      <View style={styles.addShitBtnView}>
        <Icon.Button iconStyle={{marginRight: 0}} borderRadius={100} size={60} name='pluscircle' onPress={() => setModalVisible(true)} style={styles.addShitBtn}/>
      </View>
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  }
})
export default AddShitBtnComponent