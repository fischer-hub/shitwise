import React from 'react';
import { View, Text, StyleSheet, TextInput, LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

type shitListEntry = {
  dateBegin: Date | undefined;
  dateEnd: Date | undefined;
  name: string;
};

type Props = {
  route: {
    params: {
      entry: {
        dateBegin: Date | undefined;
        dateEnd: Date | undefined;
        name: string;
      };
    };
  };
};

const ShitListEntryScreen: React.FC<Props> = ({ route }) => {
  const { entry } = route.params;

  return (
    <View style={styles.shitListEntryDisplayContainer}>
      <View style={styles.titleView}>
        <Text style={styles.titleText} adjustsFontSizeToFit={true} numberOfLines={1}>{entry.name}'s Shitappointment </Text>
      </View>
      <View style={styles.infoView}>

      </View>
      <View style={styles.commentContainerView}>
        <View style={styles.commentView}>
          <Text style={styles.noCommentsText}>
            No comments yet.
          </Text>
        </View>
      </View>
      <View style={styles.commentInputView}>
        <TextInput style={styles.commentInput} placeholder={`Comment on ${entry.name}'s Shitappointment`} placeholderTextColor="#373837" >

        </TextInput>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  shitListEntryDisplayContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#9b89b3',
    color: ''
  },
  titleView: {
    flex: 10,
    backgroundColor:'#845ec2',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoView: {
    flex: 30,
    backgroundColor: '#fef7ff',
    padding: 5
  },
  commentContainerView: {
    flex: 50,
    backgroundColor: '#fef7ff',
    padding: 15,
    marginTop:1
  },
  commentView: {
    flex: 50,
    backgroundColor: '#e9daeb',
    borderRadius: 30,
    padding: 5,
    marginTop: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentInputView: {
    flex: 10,
    backgroundColor: '#fef7ff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 1,
    justifyContent: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30
  },
  commentInput: {
    backgroundColor: '#b7a1d4',
    borderRadius: 30,
    paddingLeft: 15
  },
  noCommentsText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})
export default ShitListEntryScreen;
