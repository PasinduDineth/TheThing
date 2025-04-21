import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

const SignUpScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>

        <Text style={styles.title}>The Thing</Text>
        <Text style={styles.subtitle}>Sign up an account</Text>

        <InputField placeholder="Email Address" icon="mail" keyboardType="email-address" />
        <InputField placeholder="Password" icon="lock" secureTextEntry />
        <InputField placeholder="Confirm Passowrd" icon="lock" secureTextEntry />

        <PrimaryButton text="Sign Up" onPress={() => {}} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.loginLink}> Sign In</Text>
          </TouchableOpacity>
        </View>
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
    fontFamily: 'serif'
  },
  footer: {
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#6b7280',
    fontFamily: 'serif'
  },
  loginLink: {
    fontSize: 14,
    color: '#1f2937',
    fontWeight: '600',
    fontFamily: 'serif'
  },
});

export default SignUpScreen;
