//import引入相关组件
import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    DeviceEventEmitter
} from 'react-native';
import BoyPage from "../testpage/boy";

export default class CenterPage extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onpress={
                    () => {
                        this.props.navigation.navigate('BoyPage',
                            {
                                params: 'qqqqqqqqqqqqqqqqqq',
                            })
                    }
                }>
                    <Text>点击跳转</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

