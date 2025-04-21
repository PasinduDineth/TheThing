import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import SignUpScreen from './pages/SignUpScreen';
import SignInScreen from './pages/SignInScreen';
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <SignInScreen/>
    </SafeAreaView>
  );
};

export default App;
