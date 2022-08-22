import React, { useState } from "react";
import { Text, Image, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';

import {DATA} from "../Data/Products";
import {styles} from "../Styles/Styles";
import {Item} from "../Components/items"

function HomeScreen({navigation}) {
    const [selectedId] = useState(null);
  
    const renderItem = ({ item }) => {
      return (
        <Item
          item={item}
          onPress={() => navigation.navigate('Details', {item: item })}
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

export default HomeScreen;

