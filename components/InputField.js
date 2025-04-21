import React from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './InputField.scss';

const InputField = ({ placeholder, secureTextEntry, keyboardType, icon }) => {
//   const iconSource = icon ? require(`../../assets/icons/${icon}.png`) : null;

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

export default InputField;
