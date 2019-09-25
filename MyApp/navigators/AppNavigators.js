import React from 'react';
import {StackNavigator} from 'react-navigation';
import HomePage from "../pages/workpages/home";
import BoyPage from "../pages/testpage/boy";
import GirlPage from "../pages/testpage/girl";


export const AppStackNavigator = StackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            header: null
        }
    },
    BoyPage: {
        screen: BoyPage,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name}页面`
        })
    },
    GirlPage: {
        screen: GirlPage,
        navigationOptions: (props) => {
            const {navigation} = props;
            const {state} = navigation;
            const {params} = state;
            return ({
                title: params.name ? params.name : '这是girl页面'
            })
        }
    },
});
