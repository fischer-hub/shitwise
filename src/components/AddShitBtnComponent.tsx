import React, {useState} from 'react';
import { Modal, StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-date-picker';
import { format, minTime, isBefore } from 'date-fns'
import { TouchableWithoutFeedback } from 'react-native';
import { shitwiseDB } from './supabaseConfig';
import myName from "../helper";



type shitListEntry = {
  dateBegin: Date | undefined;
  dateEnd: Date | undefined;
  name: string;
};


const renderDate = (date: Date | undefined, title: string) => {
  if(!date){
    return title
  }else{
    return format(date, 'dd.MM.yy - HH:mm')
  }
}


const AddShitBtnComponent = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [begin, setDateBegin] = useState<undefined|Date>(undefined);
  const [end, setDateEnd] = useState<undefined|Date>(undefined);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  let addToList = props.addToList

  const addShittapointment = async (shittapointment: shitListEntry) => {

    shittapointment.dateBegin ??= new Date()
    shittapointment.dateEnd ??= new Date()
    
    const { error } = await shitwiseDB.from('shittapointments').insert({ begin: format(shittapointment.dateBegin, 'MM-dd-y HH:mm:SS'), end: format(shittapointment.dateEnd, 'MM-dd-y HH:mm:SS'), name: shittapointment.name })
    
    console.log(error)
    addToList(shittapointment)
  
  
  }

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
                  <Pressable style={styles.dialogueBtns} onPress={() => setOpen1(true)}>
                    <Text style={styles.dialogueBtnsText}>{renderDate(begin, 'Begin')}</Text>
                  </Pressable>
                  <DatePicker modal={true} mode='datetime' open={open1} date={new Date()}
                    onConfirm={(date) => {
                      setOpen1(false)
                      setDateBegin(date)
                    }}
                    onCancel={() => {
                      setOpen1(false)
                    }}
                  />
                </View>
                <View style={styles.dialogueBtnsView}>
                  <Pressable style={styles.dialogueBtns} onPress={() => setOpen2(true)}>
                    <Text style={styles.dialogueBtnsText}>{renderDate(end, 'End')}</Text>
                  </Pressable>
                  <DatePicker modal={true} mode='datetime' open={open2} date={new Date()}
                    onConfirm={(date) => {
                      setOpen2(false)
                      setDateEnd(date)
                    }}
                    onCancel={() => {
                      setOpen2(false)
                    }}
                  />
                </View>
                <View style={styles.dialogueBtnsView}>
                  <Pressable style={styles.confirmBtn} onPress={() => {setModalVisible(false); addShittapointment({dateBegin: begin, dateEnd: end, name: props.myName})}}>
                    <Text style={styles.confirmBtnText}>Confirm</Text>
                  </Pressable>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableOpacity>
      </Modal>
      <View style={styles.addShitBtnView}>
        <Icon.Button backgroundColor={'transparent'} color={'#845ec2'} iconStyle={{marginRight:0}} borderRadius={1000} size={80} name='pluscircle' onPress={() => {setModalVisible(true); setDateBegin(undefined); setDateEnd(undefined)}} style={styles.addShitBtn}/>
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
    fontSize: 21,
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
    borderColor: '#845ec2',
    borderWidth: 2,
    paddingVertical: 4,
    paddingHorizontal: 10,
    width: '100%',
    alignItems: 'center'
  },
  confirmBtn: {
    borderRadius: 50,
    backgroundColor: '#845ec2',
    paddingVertical: 4,
    paddingHorizontal: 10,
    width: '100%',
    alignItems: 'center'
  },
  confirmBtnText: {
    fontSize: 17,
    color: '#fef7ff',
    fontWeight: 'bold'
  },
  dialogueBtnsText: {
    fontSize: 17,
    color: '#845ec2',
    fontWeight: 'bold'
  }
})
export default AddShitBtnComponent