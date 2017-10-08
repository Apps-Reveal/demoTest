/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to React Native!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eae7ff",
        flex: 1,
        paddingTop: 130
    },
    title: {
        fontSize: 26,
        color: '#6435c9',
        textAlign: 'center',
        fontStyle: 'italic',
        letterSpacing: 2,
        lineHeight: 33,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        textDecorationLine: 'line-through', // underline, line-through
        textDecorationStyle: 'solid' // double, solid, dotted, dashed
    }
});

AppRegistry.registerComponent('App', () => App);
