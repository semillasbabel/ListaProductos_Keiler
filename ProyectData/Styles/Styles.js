import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: "#1168AD",
    },

    item: {
      padding: 20,
      marginVertical: 5,
      marginHorizontal: 70,
      backgroundColor: 'white',
    //   flexDirection: 'row',
    //   alignContent: 'center',
      alignItems: 'center',
      borderRadius: 40,
    },

    title: {
      fontSize: 15,
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
    },







    // ---------- Separator ----------
    containerdetails: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: "flex-start", 
        // backgroundColor: 'darkgray',
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
        marginTop: 10,
        width: 200,
        height: 50,
    }

});