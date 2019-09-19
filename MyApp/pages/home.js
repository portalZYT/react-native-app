//import引入相关组件
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class HomePage extends Component{
    /*
        在React-native里，使用最多的是弹性盒子模型。其默认的方向是column。
        也就是默认的主轴是纵向的。
    */
    render(){
        return(<View style={styles.container}>
            <Text>首页122w</Text>

        </View>)
    }
}
const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })