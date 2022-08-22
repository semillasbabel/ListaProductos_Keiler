import { Text, Image, TouchableOpacity} from 'react-native';

import {styles} from "../Styles/Styles";

export const Item = ({ item, onPress}) => (
    <TouchableOpacity 
    onPress={onPress} 
    style={[styles.item]}>

        <Image
        source={{
        uri: item.imageuri}}
        style={{ width: 80, height: 80 }}/>

      <Text style={[styles.title]}>{item.name}</Text>
      <Text style={[styles.title]}>₡{item.price}</Text>

    </TouchableOpacity>
);
