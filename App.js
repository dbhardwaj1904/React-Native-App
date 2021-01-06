import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput, Card, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SearchCity from './components/SearchCity';
import Home from './components/Home';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Current') {
              iconName = 'md-cloud';
            } else if (route.name === 'SelectCity') {
              iconName = 'md-options';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          activeBackgroundColor: '#6200ee',
          inactiveBackgroundColor: '#6200ee'
        }}>
        <Tab.Screen name="Current" component={Home} />
        <Tab.Screen name="SelectCity" component={SearchCity} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
