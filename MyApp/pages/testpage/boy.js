//import引入相关组件
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    DeviceEventEmitter
} from 'react-native';

export default class BoyPage extends Component {
    constructor(props) {
        super(props);
        const {navigation} = this.props;
        let yy = navigation.getParam("params");
        console.log(1111111, yy);
    }

    render() {
        return (
            <View>
                <TouchableOpacity onpress={
                    () => {
                        this.props.navigation.goBack();
                    }
                }>
                    {/*<Text>{yy}</Text>*/}
                    <Text>点击返回</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
