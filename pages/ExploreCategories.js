import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

const categories = [
  { title: 'Communication', icon: require('../assets/icons/future.png') },
  { title: 'Spicy', icon: require('../assets/icons/in-love.png') },
  { title: 'Intimacy', icon: require('../assets/icons/play.png') },
  { title: 'Kink', icon: require('../assets/icons/time-management.png') },
  { title: 'Communication', icon: require('../assets/icons/future.png') },
  { title: 'Spicy', icon: require('../assets/icons/in-love.png') },

];

const ExploreCategories = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Explore</Text>
        <Text style={styles.subtitle}>Question categories</Text>

        <View style={styles.cardWrapper}>
          {categories.map((item, index) => (
            <TouchableOpacity key={index} style={styles.categoryCard}>
              <Text style={styles.categoryText}>{item.title}</Text>
              <Image source={item.icon} style={styles.icon} />
            </TouchableOpacity>
          ))}
        </View>
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
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    textAlign: 'center',
    color: '#1f2937',
    marginTop: 20,
    fontFamily: 'serif'
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'serif'
  },
  cardWrapper: {
    gap: 14,
  },
  categoryCard: {
    backgroundColor: '#f5f3ff',
    borderRadius: 12,
    paddingVertical: 23,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 18,
    color: '#1f2937',
    fontWeight: '500',
    fontFamily: 'serif'
  },
  icon: {
    width: 34,
    height: 34,
    resizeMode: 'contain',
  },
});

export default ExploreCategories;
