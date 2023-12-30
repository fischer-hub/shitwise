import React from 'react';
import { View, Text } from 'react-native';

type shitListEntry = {
  dateBegin: Date | undefined;
  dateEnd: Date | undefined;
  name: string;
};

const ShitListEntryScreen = ({route}) => {

  return (
    <View>
      <Text>{entry.name}</Text>
    </View>
  )
}

export default ShitListEntryScreen;
