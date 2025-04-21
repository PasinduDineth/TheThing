import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import styles from './SignUpScreen.scss';

const SignUpScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>

        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Sign up to get started</Text>

        <InputField placeholder="Full Name" icon="user" />
        <InputField placeholder="Email Address" icon="mail" keyboardType="email-address" />
        <InputField placeholder="Password" icon="lock" secureTextEntry />

        <PrimaryButton text="Sign Up" onPress={() => {}} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.loginLink}> Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
