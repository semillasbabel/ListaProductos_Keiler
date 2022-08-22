import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

      // ---------- index Styles ----------
    
    container: {
      flex: 1,
      backgroundColor: "#1168AD",
    },

    item: {
      padding: 20,
      marginTop: 5,
      marginBottom: 5,
      marginHorizontal: 70,
      backgroundColor: 'white',
      alignItems: 'center',
      borderRadius: 40,
    },

    itemimage:{
      width: 80, 
      height: 80
    },

    itemname: {
      fontSize: 15,
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
    },

    itemdescripcion: {
      fontSize: 15,
      marginTop: 5,
      color: '#1168AD',
      fontWeight: 'bold',
      textAlign: 'center',
    },

    // ---------- Details Styles ----------
    containerdetails: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: "flex-start", 
        backgroundColor: 'white',
    },

    imagedetails:{
        marginTop: 60,
        width: 250,
        height: 250
    },

    namedetails:{
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    pricedetails:{
        fontSize: 20,
        marginTop: 10,
        color: '#1168AD',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    descriptiondetails:{
        fontSize: 15,
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    btnbackdetails:{
      backgroundColor : '#1168AD',
      borderRadius: 30,
      width: 100,
      marginTop: 20,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },

    btntext:{
      color: 'white',
      fontWeight: 'bold',
    }

});