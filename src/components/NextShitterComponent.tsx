import React, { useState, useEffect } from 'react';
import {Text, View, SafeAreaView, StyleSheet, LayoutChangeEvent } from 'react-native';
import { format, closestIndexTo, isBefore } from 'date-fns'
import Icon from 'react-native-vector-icons/Entypo';

type shitListEntry = {
  dateBegin: Date | undefined;
  dateEnd: Date | undefined;
  name: string;
};

interface ScalableTextProps {
  text: string;
  width: number;
}

const ScalableText: React.FC<ScalableTextProps> = ( {text}, {width} ) => {
  // Calculate font size based on text length
  const fontSize = width / text.length;
  console.log(width)
  console.log(fontSize)

  return (
    <View>
      <Text style={{ fontSize }} numberOfLines={1}>
        {text}
      </Text>
    </View>
  );
};

const getNextShitter = ( shitListSorted: shitListEntry[] ) => {
  const currentDate = new Date();
  const dateList = shitListSorted.map(entry => entry.dateBegin ??= new Date());
  var closest_idx = closestIndexTo(currentDate, dateList);
  
  if(closest_idx !== undefined){
    if(isBefore(shitListSorted[closest_idx].dateBegin ??= new Date, currentDate) && shitListSorted.length > 1){
      closest_idx++;
    }
  }
  else{
    return {dateBegin: new Date(1969, 4, 20), dateEnd: new Date(1969, 4,21), name: 'No shit appointments registered yet.'}
  }
  return shitListSorted[closest_idx];
};

const NextShitterComponent = (props: any) => {

  const data = props.shitList;
  const [viewWidth, setViewWidth] = useState(0);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.nextShitterContainer}>
        <Text style={styles.nextShitterFont1} adjustsFontSizeToFit={true} numberOfLines={1}>Next shitter is: {getNextShitter(data).name}!</Text> 
        <Text style={styles.nextShitterFont2}>Shit reserved for {format(getNextShitter(data).dateBegin ??= new Date(), 'dd.MM.yyyy')}!</Text> 
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
    color: 'black',
  fontSize: 30
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