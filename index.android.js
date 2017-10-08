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
        flexDirection: 'row', // 默认值：column , 横向是：row
        // x轴的显示方式
        // alignItems: 'flex-end', // 默认值：flex-start， 其他值：center, flex-end
        // y轴的显示方式
        justifyContent: 'space-around', // 默认值：flex-start, 其他值：center, flex-end, space-between, space-around
    },
    item: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#6435c9',
        margin: 6,
        flex: 1,
    },
    itemOne: {
        // alignSelf 用于设置单项
        // alignSelf:'flex-start'
    },
    itemTwo: {
        // alignSelf:'center'
    },
    itemThree: {
        flex: 2
    },
    itemText: {
        fontSize: 33,
        fontFamily: "Arial",
        fontWeight: '200',
        color: "#6435c9",
        padding: 30,
    }
});

AppRegistry.registerComponent('App', () => App);
