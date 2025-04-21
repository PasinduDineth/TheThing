import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const InputField = ({ placeholder, secureTextEntry, keyboardType, icon }) => {
  // const iconSource = icon ? require(`../../assets/icons/${icon}.png`) : null;

  return (
    <View style={styles.inputContainer}>
      {/* {iconSource && <Image source={iconSource} style={styles.icon} />} */}
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={styles.input}
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 12,
    tintColor: '#6b7280',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1f2937',
    fontFamily: 'serif'
  },
});

export default InputField;
