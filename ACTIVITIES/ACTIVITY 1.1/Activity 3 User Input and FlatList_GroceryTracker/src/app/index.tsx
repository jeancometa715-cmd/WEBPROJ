import { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const [item, setItem] = useState('');
  const [groceries, setGroceries] = useState<string[]>([]);

  const addItem = () => {
    if (item.trim() !== '') {
      setGroceries([...groceries, item]);
      setItem('');
    }
  };

  const removeItem = (index: number) => {
    setGroceries(groceries.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Grocery Tracker</Text>

      <Text style={styles.subtitle}>
        Keep track of your grocery list 💗
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter grocery item..."
        placeholderTextColor="#9B7AA5"
        value={item}
        onChangeText={setItem}
      />

      <TouchableOpacity style={styles.addButton} onPress={addItem}>
        <Text style={styles.buttonText}>＋ Add Grocery</Text>
      </TouchableOpacity>

      <FlatList
        data={groceries}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.groceryItem}>
            <Text style={styles.itemText}>🛍️ {item}</Text>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => removeItem(index)}
            >
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 60,
    backgroundColor: '#FFF0F8',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7B1FA2',
    marginBottom: 8,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#A14B8C',
    marginBottom: 25,
  },

  input: {
    borderWidth: 2,
    borderColor: '#D66BA0',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
  },

  addButton: {
    backgroundColor: '#9C27B0',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  groceryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#E91E63',
  },

  itemText: {
    fontSize: 17,
    color: '#5E2A68',
    fontWeight: '500',
  },

  deleteButton: {
    backgroundColor: '#E91E63',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },

  deleteText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

