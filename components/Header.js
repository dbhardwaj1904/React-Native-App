import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function Header(props) {
    return(
        <Appbar.Header>
            <Appbar.Content 
              title="Weather Forecast"
              subtitle={props.title}
              style={{alignItems: "center"}}
            />
        </Appbar.Header>
    );
}