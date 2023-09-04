import React, {useState} from 'react';
import { Modal, StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-date-picker'
import { TouchableWithoutFeedback } from 'react-native';


const AddShitBtnComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [begin, setDateBegin] = useState(new Date());
  const [end, setDateEnd] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)} >
        <TouchableOpacity style={{flex:1}} onPress={() => {setModalVisible(false)}}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalWindow}>
                <View style={styles.dialogueTitle}>
                  <Text style={styles.dialogueTitleText}>Add Shitappointment</Text>
                </View>
                <View style={styles.dialogueBtnsView}>
                  {/* We can probably get rid of these two pressables by putting them in one component and passing the title and onpress fct as props but oh well im too lazy rn */}
                  <Pressable style={styles.dialogueBtns} onPress={() => setOpen(true)}>
                    <Text style={styles.dialogueBtnsText}>Begin</Text>
                  </Pressable>
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
                <View style={styles.dialogueBtnsView}>
                  <Pressable style={styles.dialogueBtns} onPress={() => setOpen(true)}>
                    <Text style={styles.dialogueBtnsText}>End</Text>
                  </Pressable>
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
                <View style={styles.dialogueBtnsView}>
                  <Pressable style={styles.dialogueBtns} onPress={() => setModalVisible(false)}>
                    <Text style={styles.dialogueBtnsText}>Confirm</Text>
                  </Pressable>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableOpacity>
      </Modal>
      <View style={styles.addShitBtnView}>
        <Icon.Button backgroundColor={'transparent'} color={'#845ec2'} iconStyle={{marginRight:0}} borderRadius={1000} size={80} name='pluscircle' onPress={() => setModalVisible(true)} style={styles.addShitBtn}/>
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
    borderRadius: 1000,
    backgroundColor: '#fef7ff',
    borderColor: 'transparent',
    padding:0
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(155, 137, 179, .7)',
  },
  modalWindow: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fef7ff',
    width: '70%',
    height: '30%',
    borderRadius: 25,
    padding: 15
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  dialogueTitle: {
    flex: 1
  },
  dialogueTitleText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'

  },
  dialogueBtnsView: {
    flex: 1,
    width: '90%',
    alignItems: 'center'
  },
  dialogueBtns: {
    borderRadius: 50,
    backgroundColor: '#845ec2',
    paddingVertical: 4,
    paddingHorizontal: 10,
    width: '100%',
    alignItems: 'center'
  },
  dialogueBtnsText: {
    color: '#fef7ff',
    fontWeight: 'bold'
  }
})
export default AddShitBtnComponent