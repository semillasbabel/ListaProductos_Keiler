import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  Image, 
  TextInput, 
  View, 
  Button,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const DATA = [
    {
      id: "1",
      title: "First Item",
    },
    {
      id: "2",
      title: "Second Item",
    },
    {
      id: "3",
      title: "Third Item",
    },
  ];

  const Item = ({ item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
      <Image
      source={{
        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',}}
        style={{ width: 30, height: 30 }}/>
      <Text style={[styles.title]}>{item.title}</Text>
    </TouchableOpacity>
  );


function HomeScreen({navigation}) {
    const [selectedId, setSelectedId] = useState(null);
  
    const renderItem = ({ item }) => {
      return (
        <Item
          item={item}
          onPress={() => navigation.navigate('Details')}
        />
      );
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: "white",
    },
    item: {
      flexDirection: 'row',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 20,
      backgroundColor: '#008AFA',
    },
    title: {
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
    },
  });

export default HomeScreen;

