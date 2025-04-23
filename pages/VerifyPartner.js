import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

const VerifyPartner = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>

        <Text style={styles.title}>The Thing</Text>
        <Text style={styles.subtitle}>Join with your partner</Text>

        <InputField placeholder="Partner's Email Address" icon="mail" keyboardType="email-address" />
        <InputField placeholder="Your Invitation code" icon="text" keyboardType="text" />

        <PrimaryButton text="Join With Partner" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#f1e8f5',
  },
  container: {
    padding: 30,
    alignItems: 'center',
  },
  logoWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#eef2ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 50,
    fontWeight: '900',
    color: '#1f2937',
    marginBottom: 6,
    fontFamily: 'serif'
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 28,
    fontFamily: 'serif',
    textAlign: 'center'
  },
});

export default VerifyPartner;
