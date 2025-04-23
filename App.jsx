import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import SignUpScreen from './pages/SignUpScreen';
import SignInScreen from './pages/SignInScreen';
import PartnerInvite from './pages/PartnerInvite';
import VerifyPartner from './pages/VerifyPartner';
import ExploreCategories from './pages/ExploreCategories';
import ExploreQuestion from './pages/ExploreQuestion';
import Profile from './pages/Profile';
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <ExploreQuestion/>
    </SafeAreaView>
  );
};

export default App;
