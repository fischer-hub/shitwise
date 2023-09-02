import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, View, Button} from 'react-native';

const AddShitDialogue = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
      <Modal animationType="slide" transparent={false} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
            <Text>Modal Content</Text>
            <Button title='close' onPress={() => setModalVisible(false)}></Button>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});

export default AddShitDialogue;