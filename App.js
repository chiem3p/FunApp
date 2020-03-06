import React from "react";
import { View, Text, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

// import {TabNavigator} from 'react-
import Root from "./src/Screen/Root";
import SignIn from "./src/Screen/Login";
import SignUp from "./src/Screen/SignUp";
import Home from "./src/Screen/Home";
import Notification from "./src/Screen/Notification";
import Friend from "./src/Screen/Friend";
import More from "./src/Screen/More";
import Account_Setting from "./src/Screen/Account_Setting";
import MyProfile from "./src/Screen/My_Profile";
import Weather_Detail from "./src/Screen/Weather_Detail";
const HomePage = createStackNavigator({
  Home: { screen: Home },
  Weather_Detail: { screen: Weather_Detail }
});
const friend = createStackNavigator({
  Friend: { screen: Friend }
});
const notification = createStackNavigator({
  Notification: { screen: Notification }
});
// const Profile = createStackNavigator({

//   Account_Setting: { screen: Account_Setting },
//   MyProfile: { screen: MyProfile }
// });
const more = createStackNavigator({
  more: { screen: More },
  Account_Setting: { screen: Account_Setting },
  MyProfile: { screen: MyProfile }
});
const RootHome = createStackNavigator({
  Root: { screen: Root },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp }
});
const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomePage },
  Friend: { screen: friend },
  Notification: { screen: notification },
  More: {
    screen: more,
    navigationOptions: {
      title: "More",
      tabBarIcon: (
        <Image
          style={{ width: 25, height: 25 }}
          source={require("./src/Image/iconMore.png")}
        />
      ),
      headerStyle: {
        backgroundColor: "green"
      },
      headerTitleStyle: {
        fontSize: 30,
        color: "white"
      }
    }
  }
});
const AppStack = createSwitchNavigator({
  Auth: {
    screen: RootHome
  },
  Main: {
    screen: TabNavigator
  }
});
export default createAppContainer(AppStack);
