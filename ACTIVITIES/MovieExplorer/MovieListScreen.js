import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const movies = [
  {
    id: '1',
    name: 'Avatar',
    year: '2009',
    genre: 'Science Fiction',
    description: 'A science fiction movie about humans exploring the planet Pandora.',
  },
  {
    id: '2',
    name: 'Avengers: Endgame',
    year: '2019',
    genre: 'Action',
    description: 'The Avengers come together for their final battle against Thanos.',
  },
  {
    id: '3',
    name: 'Interstellar',
    year: '2014',
    genre: 'Science Fiction',
    description: 'A group of astronauts travels through space to find a new home for humanity.',
  },
];

export default function MovieListScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Movie List</Text>

      {movies.map((movie) => (
        <TouchableOpacity
          key={movie.id}
          style={styles.movieCard}
          onPress={() =>
            navigation.navigate('MovieDetails', {
              name: movie.name,
              year: movie.year,
              genre: movie.genre,
              description: movie.description,
            })
          }
        >
          <Text style={styles.movieName}>{movie.name}</Text>
          <Text style={styles.movieInfo}>
            {movie.year} • {movie.genre}
          </Text>

          <Text style={styles.viewText}>View Details →</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  movieCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },
  movieName: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  movieInfo: {
    fontSize: 15,
    color: '#666',
    marginBottom: 12,
  },
  viewText: {
    color: '#6c63ff',
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 30,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});