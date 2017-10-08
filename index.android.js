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
                <View style={[styles.item, styles.itemOne]}>
                    <Text style={styles.itemText}>1</Text>
                </View>
                <View style={[styles.item, styles.itemTwo]}>
                    <Text style={styles.itemText}>2</Text>
                </View>
                <View style={[styles.item, styles.itemThree]}>
                    <Text style={styles.itemText}>3</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eae7ff",
        flex: 1,
        paddingTop: 23
    },
    item: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#6435c9',
        margin: 6,
    },
    itemOne: {},
    itemTwo: {},
    itemThree: {},
    itemText: {
        fontSize: 33,
        fontFamily: "Arial",
        fontWeight: '200',
        color: "#6435c9",
        padding: 30,
    }
});

AppRegistry.registerComponent('App', () => App);
