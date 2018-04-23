import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator,StatusBar } from 'react-native';
import Weather from "./Weather";
import Weather2 from "./WeatherFunction";

const TEST_URL = "http://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1";

export default class App extends React.Component {
  state = {
    isLoaded : false,
    error : null,
    temperature:null,
    name : null,
    isWeatherLoaded : false,
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position =>{
        this.setState({
          isLoaded: true
        });      
      },
      error => {
        //console.log(error);
        this.setState({
          error: error
        })              
      }        
    );
    
    this._getWeather(1,0);
  }
 
  _getWeather = (value1 , value2) => {
    fetch(TEST_URL)
    .then(response => response.json())
    .then(json => {
      //console.log(json)
      this.setState({
        isWeatherLoaded : true,
        temperature : json.list[0].main.temp,
        name:json.city.name,
      });
    });
  };

  render() {
    const { isLoaded , error, temperature , name, isWeatherLoaded }  = this.state;
    
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isWeatherLoaded ? <Weather2 weatherName = 'Clear' temp={Math.floor(temperature - 273.15)}/> : (
          <View style={styles.loading}>            
            <Text style={styles.loadingText}> 로딩중!!!! </Text>
            {error ? <Text style={styles.errorText}> {error} </Text> : null}            
            <Text style={styles.loadingText}> temp : {temperature} </Text>
            <Text style={styles.loadingText}> name : {name} </Text>
            {isWeatherLoaded ? 
              <Text style={styles.errorText}> 로드됨 </Text> : 
              <Text style={styles.errorText}> 로드되지 않음 </Text>              
            }                        
          </View>
        )}                
      </View>     
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    justifyContent: 'center',
    flexDirection : 'column'
  },

  loading:{
    flex : 1,
    backgroundColor : '#fff19f',
    paddingLeft: 25,
    justifyContent: 'flex-end',
  },
  errorText:{
    fontSize:25,      
    fontWeight : 'bold',
    color: 'red',
  },
  loadingText:{
    fontSize:38,      
  },



});
