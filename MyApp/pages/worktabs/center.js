//import引入相关组件
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Button
} from 'react-native';
import BoyPage from "../testpage/boy";

export default class CenterPage extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View>
                <Text>欢迎来到页面</Text>
                <Button title='去boy页面(导航栏页面传值)'
                        onPress={() => {
                            navigation.navigate('BoyPage', {name: '动态'})
                        }}/>
                <Button title='去girl页面(导航栏设置值)'
                        onPress={() => {
                            navigation.navigate('GirlPage', {name: 'rgggggggg'})
                        }}/>

            </View>
        )
    }
}

