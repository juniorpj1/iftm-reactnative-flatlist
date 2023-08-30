import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const data = [
  { key: 'Abajur', image: require('./images/image01.png') },
  { key: 'Lâmpada de chão', image: require('./images/image02.png') },
  { key: 'Lâmpada de teto', image: require('./images/image03.png') },
  { key: 'Lâmpada de teto', image: require('./images/image04.png') },
  { key: 'Lâmpada de parede', image: require('./images/image05.png') },
  { key: 'Lâmpada de LED', image: require('./images/image06.png') },
  { key: 'Lâmpada de escritório', image: require('./images/image07.png') },
  { key: 'Lamparina', image: require('./images/image08.png') },
];

const numColumns = 2;

class App extends Component {
  state = {
    dataSource: data,
  };

  loadData = () => {
    const itemsToAdd = 10;
    const startIndex = this.state.dataSource.length;
    const endIndex = startIndex + itemsToAdd;
    const newData = data.slice(startIndex, endIndex);

    if (newData.length > 0) {
      this.setState(prevState => ({
        dataSource: [...prevState.dataSource, ...newData],
      }));
    }
  };

  renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Lighteria</Text>
      <Image source={require('./images/sacola.png')} style={styles.headerImage} />
    </View>
  );

  renderItem = ({ item }) => {
    if (!item.image) {
      return <View style={styles.item} />;
    }

    return (
      <View style={styles.item}>
        <Image source={item.image} style={styles.itemImage} />
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={this.state.dataSource}
        style={styles.container}
        renderItem={this.renderItem}
        keyExtractor={(_, index) => index.toString()}
        numColumns={numColumns}
        ListHeaderComponent={this.renderHeader}
        contentContainerStyle={styles.flatListContent}
        onEndReached={this.loadData}
        onEndReachedThreshold={0.1}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerImage: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  flatListContent: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  item: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 8,
    borderRadius: 10,
    padding: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  itemText: {
    color: '#333333',
    marginTop: 8,
    textAlign: 'center',
    fontSize: 14,
  },
});

export default App;
