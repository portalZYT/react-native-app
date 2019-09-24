//import引入相关组件
import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

export default class FolderPage extends Component{
    /*
        在React-native里，使用最多的是弹性盒子模型。其默认的方向是column。
        也就是默认的主轴是纵向的。
    */
    render(){
        return(<View style={{flex:1,
            justifyContent:'center',
            backgroundColor:'red'}}>
            <Text>资料库页面</Text>
        </View>)
    }
}