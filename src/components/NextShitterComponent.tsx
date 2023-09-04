import React from 'react';
import {Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { format, closestIndexTo, isBefore } from 'date-fns'
import Icon from 'react-native-vector-icons/Entypo';

type shitListEntry = {
  date: Date;
  title: string;
};

const getNextShitter = ( shitListSorted: shitListEntry[] ) => {
  const currentDate = new Date();
  const dateList = shitListSorted.map(entry => entry.date);
  var closest_idx = closestIndexTo(currentDate, dateList);
  
  if(closest_idx !== undefined){
    if(isBefore(shitListSorted[closest_idx].date, currentDate)){
      closest_idx++;
    }
  }
  else{
    return {date: new Date(1969, 4, 20), title: 'No shit appointments registered yet.'}
  }
  console.log("closestidx: ",closest_idx)
  return shitListSorted[closest_idx];
};

const NextShitterComponent = (props: any) => {

  const data = props.shitList;

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.nextShitterContainer}>
        <Text style={styles.nextShitterFont1}>Next shitter is: {getNextShitter(data).title}!</Text>
        <Text style={styles.nextShitterFont2}>Shit reserved for {format(getNextShitter(data).date, 'dd.MM.yyyy')}!</Text> 
        <View style={styles.cancelBtnContainer}>
          <Icon.Button iconStyle={{marginRight: 5}} borderRadius={20} name='circle-with-cross' style={styles.cancelShitappointmentBtn}>
            Cancel Shittapointment
          </Icon.Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({  
  wrapper: {
    flex: 1,
    backgroundColor: '#fef7ff'
 },  
 cancelShitappointmentBtn: {
    fontWeight: 'bold',
    backgroundColor:'#845ec2',
    fontSize: 20,
    borderRadius: 20,
  },
  cancelBtnContainer: {
    flex:1,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
  },
  nextShitterFont1: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black'
  },
  nextShitterFont2: {
    fontSize: 20,
    color: 'black'
  },
  nextShitterContainer: {
     backgroundColor: '#fef7ff',
     flex: 1,
     alignItems: 'center',
     justifyContent: 'flex-start',
     marginHorizontal: 15,
     marginTop: 30,
     marginBottom: 40,
     borderRadius: 30,
     padding: 20,
     borderColor: '#9b89b3',
     borderWidth: 2
  },
  cancelShitappointmentBtnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#845ec2',
  },
  cancelShitappointmentBtnIcon: {
    fontSize: 19,
    color: '#845ec2',
    marginRight: 10
  }
          
})

export default NextShitterComponent;