import React from 'react';
import {StackNavigator} from 'react-navigation';
import HomePage from "../pages/workpages/home";


export const AppStackNavigator = StackNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            header: null
        }
    },
});
