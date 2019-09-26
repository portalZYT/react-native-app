# react-native-app
nodejs+React Native开发的APP的环境配置

1.先安装Android Studio 安装时一定要选择

* Android SDK
* Android SDK Platform
* Performance (Intel ® HAXM) (AMD 处理器看这里)
* Android Virtual Device

2.安装AVD Manager(安卓模拟机)点击"Create Virtual Device..."，
然后选择所需的设备类型并点击"Next"，然后选择Pie API Level 28 image.

3.配置Android SDK环境变量,在Android Studio中SDK Manager
中复制Android SDK 路径配置环境变量

* 安装 Android-SDK，正确配置系统环境变量 ANDROID_HOME、加入 PATH：

| 系统环境变量 | 新增字符 | 原值 |
|:---|:---|:---|
| **ANDROID_HOME** | **D:\Android\sdk** |  |
| **PATH** | **%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools;** | Path |

4.下载JAVA JDK安装，找到JAVA JDK路径配置环境变量

* 安装 Java-SDK，正确配置系统环境变量 JAVA_HOME、CLASSPATH、加入 PATH：

| 系统环境变量 | 新增字符 | 原值 |
|:---|:---|:---|
| **JAVA_HOME** | **C:\Java\jdk1.8.0_121** | |
| **CLASSPATH** | **.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;%ANT_HOME%\lib;** | |
| **PATH** | **%JAVA_HOME%\bin;** | Path |

5.安装Python2,从官网下载安装即可

6.nodejs+React Native开发的APP的项目创建

* npm install -g yarn react-native-cli

* react-native init AwesomeProject

# react-native 报错的处理方法

#### (1) 项目运行时报错的处理办法

1.生工程文件后新建assets：进入\android\app\src\main新建assets文件夹

2.生成index.android.bundle文件:Dos下进入AwesomeProject项目文件夹下执行如下语句：
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

3.然后你就可以在项目文件夹AwesomeProject\android\app\src\main\assets下看到index.android.bundle文件了,说明就成功了.

4.先用Android Studio 打开android文件，生成gradle配置文件,然后在工程根目录下 react-native start,
然后点击Android Studio的运行按钮,启动模拟器。

5.在模拟器中,按Ctrl+M打开热更新，修改代码实时更新。

#### (2) 在安装了npm install --save react-navigation后跑项目然后就红屏了

安装触摸方式(需要执行以下方法)

npm install --save react-native-gesture-handler

react-native link react-native-gesture-handler

就可以了

## react-native打包apk 

见官网 https://reactnative.cn/docs/signed-apk-android/


## Node Express开发后端接口

1.npm install express-generator -g

2.express -e 生成项目工程文件

3.npm i supervisor -g 热更新,用supervisor bin/www启动项目，更改代码实时更新

4 npm i express-session --save










