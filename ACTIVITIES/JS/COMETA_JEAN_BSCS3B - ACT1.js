
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function App() {
  const [item, setItem] = useState("");
  const [groceries, setGroceries] = useState([]);


  const addItem = () => {
    if (item.trim() === "") return;

    setGroceries([
      ...groceries,
      {
        id: Date.now().toString(),
        name: item,
      },
    ]);

    setItem("");
  };

  const deleteItem = (id) => {
    setGroceries(groceries.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Grocery Tracker</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter grocery item"
          value={item}
          onChangeText={setItem}
        />

        <TouchableOpacity style={styles.addButton} onPress={addItem}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.count}>
        Items: {groceries.length}
      </Text>

      <FlatList
        data={groceries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemName}>{item.name}</Text>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteItem(item.id)}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No grocery items yet.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#f1f8e9",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "green",
  },

  inputRow: {
    flexDirection: "row",
  },

  input: {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "lightgreen",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },

  addButton: {
    backgroundColor: "green",
    paddingHorizontal: 18,
    marginLeft: 8,
    borderRadius: 8,
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  count: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },

  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },

  itemName: {
    flex: 1,
    fontSize: 17,
  },

  deleteButton: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 6,
  },

  empty: {
    textAlign: "center",
    marginTop: 30,
    color: "gray",
  },
});

