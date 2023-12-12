import React from 'react';
import { View } from 'react-native';
import CountdownTimer from './CountdownTimer';

const App = () => {
  // Set your target date here
  const targetDate = new Date('2024-03-11T00:00:00Z');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection:'column' }}>
      <CountdownTimer targetDate={targetDate} />
    </View>
  );
};

export default App;
