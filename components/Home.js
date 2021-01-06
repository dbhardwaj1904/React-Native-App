import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import { TextInput, Card, Button, Title } from 'react-native-paper';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

export default function Home() {

    const [info, setInfo] = useState([{
        city_name: "loading !!",
        temp: "loading",
        humidity: "loading",
        desc: "loading",
        icon: "loading"
    }]);

    getWeather = () => {
        console.log("Hello Weather");
        fetch("https://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=0e917347369a52a5051648f26efd05b3")
        .then(res => res.json)
        .then(data => {
            console.log(data);
            /*setInfo([{
                city_name: data.name,
                temp: data.main.temp,
                humidity: data.main.humidity,
                desc: data.weather[0].description,
                icon: data.weather[0].icon}]);
                */
        })
    }

    componentWillMount = () => {
        console.log("Hello Will Mount");
        componentDidMount();
    }
    
    componentDidMount = () => {
        console.log("Hello Did");
        this.getWeather();
    }

    return (
        <View style={styles.container}>
          <Header title="Current Weather"/>
          <Card style = {{margin: 20}}>
              <View>
                  <Title>{info.city_name}</Title>
                  <Title>{info.desc}</Title>
              </View>
          </Card>
          <Button onPress={() => this.getWeather()}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
