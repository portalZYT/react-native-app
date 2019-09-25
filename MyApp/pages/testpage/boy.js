//import引入相关组件
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity, Button,
} from 'react-native';

export default class BoyPage extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View>
                <Text>欢迎来到Boy页面</Text>
                <Button title='返回首页'
                        onPress={() => {
                            navigation.goBack()
                        }}/>
            </View>
        )
    }
}
