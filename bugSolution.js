import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = [
  { id: '1', text: 'Item 1' },
  { id: '2', text: 'Item 2' },
  { id: '3', text: 'Item 3' },
];

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.text}</Text>
  </View>
);

const App = () => {
  const [items, setItems] = useState(data);

  const updateData = () => {
    setItems([...items, { id: (items.length + 1).toString(), text: `Item ${items.length + 1}` }]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
      <Button title="Add Item" onPress={updateData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;