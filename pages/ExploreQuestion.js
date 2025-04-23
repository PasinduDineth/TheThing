import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import PrimaryButton from '../components/PrimaryButton';

const ExploreQuestion = () => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerText}>Explore</Text>
        </View>

        <View style={styles.questionCard}>
          <Text style={styles.questionIndex}>Question 1</Text>
          <Text style={styles.questionText}>
            Have you ever used tod in a sexy way?
          </Text>

          <Slider
            style={{ width: '100%', marginTop: 30 }}
            minimumValue={0}
            maximumValue={100}
            step={5}
            minimumTrackTintColor="#8b5cf6"
            maximumTrackTintColor="#ddd6fe"
            thumbTintColor="#7c3aed"
            value={sliderValue}
            onValueChange={(value) => setSliderValue(value)}
          />

          <Text style={styles.percentageText}>{sliderValue}%</Text>
          <Text style={styles.timerText}>76% of the people marked more than 60%</Text>
        </View>

        <PrimaryButton text="Confirm Answer" onPress={() => {}} />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#ede9fe',
  },
  container: {
    padding: 30,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '600',
    fontFamily: 'serif',
    color: '#1f2937',
  },
  questionCard: {
    backgroundColor: '#f5f3ff',
    borderRadius: 20,
    padding: 24,
    marginBottom: 40,
  },
  questionIndex: {
    fontSize: 14,
    color: '#6b7280',
    fontFamily: 'serif',
    marginBottom: 8,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    fontFamily: 'serif',
  },
  percentageText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#4b5563',
    fontFamily: 'serif',
  },
  timerText: {
    fontSize: 13,
    color: '#9ca3af',
    textAlign: 'center',
    marginTop: 12,
    fontFamily: 'serif',
  },
  button: {
    backgroundColor: '#7c3aed',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'serif',
    fontWeight: '500',
  },
});

export default ExploreQuestion;
