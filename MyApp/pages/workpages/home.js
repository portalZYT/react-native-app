import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';
// 底部导航栏
import TabNavigator from 'react-native-tab-navigator';
// 首页
import CenterPage from '../worktabs/center';
// 报表页面
import ReportPage from '../worktabs/report';
// 我的
import MyPage from '../worktabs/mypage';
// 资料库
import FolderPage from '../worktabs/folder';
// 日程
import DailyPage from '../worktabs/daily';

const dataSource = [
    {
        icon: require('../../img/tab_daily_gray.png'),
        selectedIcon: require('../../img/tab_daily_blue.png'),
        tabPage: 'Daily',
        tabName: '日程',
        component: DailyPage,
    },
    {
        icon: require('../../img/tab_folder_gray.png'),
        selectedIcon: require('../../img/tab_folder_blue.png'),
        tabPage: 'Folder',
        tabName: '资料库',
        component: FolderPage
    },
    {
        icon: require('../../img/tab_crm_gray.png'),
        selectedIcon: require('../../img/tab_crm_blue.png'),
        tabPage: 'Center',
        tabName: '首页',
        component: CenterPage
    },
    {
        icon: require('../../img/tab_report_gray.png'),
        selectedIcon: require('../../img/tab_report_blue.png'),
        tabPage: 'Report',
        tabName: '报表看板',
        component: ReportPage
    },
    {
        icon: require('../../img/tab_me_gray.png'),
        selectedIcon: require('../../img/tab_me_blue.png'),
        tabPage: 'My',
        tabName: '我的',
        component: MyPage
    }
];


export default class HomePage extends Component {
    state = {
        selectedTab: 'Center'
    };

    render() {
        const {navigation} = this.props;
        let tabViews = dataSource.map((item, i) => {
            return (
                <TabNavigator.Item
                    title={item.tabName}
                    selected={this.state.selectedTab === item.tabPage}
                    titleStyle={{color: '#999999'}}
                    selectedTitleStyle={{color: '#419de7'}}
                    renderIcon={() => <Image style={styles.tabIcon} source={item.icon}/>}
                    renderSelectedIcon={() => <Image style={styles.tabIcon} source={item.selectedIcon}/>}
                    tabStyle={{alignSelf: 'center'}}
                    onPress={() => {
                        this.setState({selectedTab: item.tabPage})
                    }}
                    key={i}
                >
                    <item.component navigation={navigation}/>
                </TabNavigator.Item>
            );
        });

        return (
            <View style={styles.container}>
                <TabNavigator
                    hidesTabTouch={true}
                >
                    {tabViews}
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    tabIcon: {
        width: 23,
        height: 23,
    }
});
