//import引入相关组件
import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

export default class GirlPage extends Component {
    state = {
        text: ''
    };

    render() {
        const {navigation} = this.props;
        return (
            <View>
                <Text>欢迎来到girl页面{this.state.text}</Text>
                <Button title='返回首页'
                        onPress={() => {
                            navigation.goBack();
                        }}/>
                <TextInput style={styles.input}
                           blurOnSubmit={true}
                           placeholder="Type here to translate!"
                           onChangeText={(text) => this.setState({text})}
                           value={this.state.text}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: 300,
        height: 40,
        borderRadius: 5,
        margin: 30
    }
});
