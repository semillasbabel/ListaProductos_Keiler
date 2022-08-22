import React from "react";
import {Text, Image, View, Button, TouchableOpacity} from 'react-native';
import {styles} from "../Styles/Styles";

function DetailsScreen({ route, navigation }) {
  const {item} = route.params;
  return (
    <View style={ styles.containerdetails}>
      
      <Image
        source={{
        uri: item.imageuri}}
        style={styles.imagedetails}
      />

      <Text style={ styles.namedetails}>{item.name}</Text>

      <Text style={styles.pricedetails}>Precio: ₡{item.price}</Text>


      <Text style={styles.descriptiondetails}>{item.description}</Text>

      <TouchableOpacity
      onPress={() => navigation.goBack()}>
        <View style = {styles.btnbackdetails}>
        <Text style={styles.btntext}>Volver</Text>
        </View>
      </TouchableOpacity>

      {/* <Button color = "#1168AD" style={styles.btnbackdetails} title="Volver" onPress={() => navigation.goBack()} /> */}
    </View>
  );
}

export default DetailsScreen;
  