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
                <Text>Welcome to React Native!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eae7ff",
        flex: 1,
        margin: 30,
        borderWidth: 1,
        borderColor: "#6435c9",
        borderRadius: 16,
        shadowColor: '#6435c9',
        shadowOpacity: 0.6,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    }
});


AppRegistry.registerComponent('App', () => App);
