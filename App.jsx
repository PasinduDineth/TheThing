import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import SignUpScreen from './pages/SignUpScreen';
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <SignUpScreen/>
    </SafeAreaView>
  );
};

export default App;
