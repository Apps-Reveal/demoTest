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
                <Text style={{color: "#fff"}}>Welcome to React Native!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "pink",
        flex: 1,
    }
});


AppRegistry.registerComponent('App', () => App);
