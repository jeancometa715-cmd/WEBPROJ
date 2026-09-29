import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MovieDetailsScreen({ route, navigation }) {
  const { name, year, genre, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Year</Text>
        <Text style={styles.value}>{year}</Text>

        <Text style={styles.label}>Genre</Text>
        <Text style={styles.value}>{genre}</Text>

        <Text style={styles.label}>Description</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>← Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  infoBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#6c63ff',
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    marginTop: 5,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});