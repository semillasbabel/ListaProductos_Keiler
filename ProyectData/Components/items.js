import { Text, View, Image, TouchableOpacity} from 'react-native';

import {styles} from "../Styles/Styles";

export const Item = ({ item, onPress}) => (
    <TouchableOpacity 
    onPress={onPress} 
    style={[styles.item]}>

        <Image
        source={{
        uri: item.imageuri}}
        style={styles.itemimage}/>

      <View style={styles.indextextcontainer}>
        <Text style={[styles.itemname]}>{item.name}</Text>
        <Text style={[styles.itemdescripcion]}>₡{item.price}</Text>
      </View>

    </TouchableOpacity>
);
