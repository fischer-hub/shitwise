import React, {useState} from 'react';
import { Modal, StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-date-picker'


const AddShitBtnComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [begin, setDateBegin] = useState(new Date());
  const [end, setDateEnd] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)} >
        <View style={styles.modalOverlay}>
          <View style={styles.modalWindow}>
            <View style={styles.dialogueTitle}>
              <Text>Add Shitappointment</Text>
            </View>
            <View style={styles.selectBeginBtn}>
              <Button title="Begin" onPress={() => setOpen(true)} />
              <DatePicker modal={true} mode='datetime' open={open} date={begin}
                onConfirm={(date) => {
                  setOpen(false)
                  setDateBegin(date)
                }}
                onCancel={() => {
                  setOpen(false)
                }}
              />
            </View>
            <View style={styles.selectEndBtn}>
              <Button title="End" onPress={() => setOpen(true)} />
              <DatePicker modal={true} mode='datetime' open={open} date={begin}
                onConfirm={(date) => {
                  setOpen(false)
                  setDateBegin(date)
                }}
                onCancel={() => {
                  setOpen(false)
                }}
              />
            </View>
            <View style={styles.confirmBtn}>
              <Button title='Confirm' onPress={() => setModalVisible(false)}></Button>
            </View>

          </View>
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
    backgroundColor: '#845ec2',
    borderColor: '#845ec2',
    borderWidth: 2
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(rgba(221, 134, 179, 0.7))',
  },
  modalWindow: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D7C0D0',
    width: '70%',
    height: '30%',
    borderRadius: 25
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  dialogueTitle: {
    flex: 1
  },
  selectBeginBtn: {
    flex: 1
  },
  selectEndBtn: {
    flex: 1
  },
  confirmBtn: {
    flex: 1
  }
})
export default AddShitBtnComponent