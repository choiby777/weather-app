import React, {Component} from 'react';
import { StyleSheet , Text , View } from "react-native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";

export default class Weather extends Component {
    state = {  }    
    render() {
        return (
            <LinearGradient 
                colors={["#8cc6ff" , "#0080ff"]} 
                style={ styles.container}            
            >            

            <View style={styles.top}>
                <Ionicons color="white" size={144} name="ios-rainy" />
                <Text style={styles.TempText}> 35℃ </Text>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.bottomText1}> Raining like a MF </Text>
                <Text style={styles.bottomText2}> For more info look outside </Text>
            </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },      
    top:{
        flex:3,
        //backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection : 'column'    
    },
    TempText:{
        fontSize:40,
        //fontWeight : 'bold',
        color: 'white',
        textAlign: 'center',  
        marginTop: 10,
    },
    bottom:{
        flex:1,        
        //backgroundColor: 'blue',
        justifyContent: 'center',
        flexDirection : 'column'    
    },    
    bottomText1:{
        fontSize:40,
        fontWeight : 'bold',
        color: 'white',
        textAlign: 'center'
    },    
    bottomText2:{
        fontSize:20,
        fontWeight : 'bold',
        color: 'white',
        textAlign: 'center'
    },    

  });
  