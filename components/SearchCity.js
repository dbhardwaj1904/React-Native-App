import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import { TextInput, Card, Button } from 'react-native-paper';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

export default function SearchCity() {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);

  fetchCities = (text) => {
    setCity(text);
    fetch("https://api.weather.com/v3/location/search?apiKey=6532d6454b8aa370768e63d6ba5a832e&language=en-US&query="+text+"&locationType=city&format=json")
      .then(item=>item.json())
      .then(cityData=>{
        setCities(cityData.location.address.slice(0,9))
        console.log(cityData.location.address.slice(0,9))
      })
  }

  return (
    <View style={styles.container}>
      <Header title = "Select City"/>
      <TextInput
        label="Enter City ..."
        value={city}
        onChangeText={text => this.fetchCities(text)}
        />
      <Button
        icon = "content-save" mode = "contained" onPress={() => console.log("Pressed")}
        theme = {{colors: {primary: "#00aaff"}}}
        style = {{margin: 20}}>
          <Text style = {{color: "white"}}> Search </Text>
      </Button>
      <FlatList
        keyExtractor = {item => item}
        data = {cities}
        renderItem = {({item}) => {
          return (
          <Card style = {{margin: 2, padding: 12}}>
            <Text>{item}</Text>
          </Card>);
        }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
