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
const HomePage = createStackNavigator({
  Home: { screen: Home }
});
const friend = createStackNavigator({
  Friend: { screen: Friend }
});
const fotification = createStackNavigator({
  Notification: { screen: Notification }
});
const more = createStackNavigator({
  More: {
    screen: More,
    
  }
});
const RootHome = createStackNavigator({
  Root: { screen: Root },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp }
});
const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomePage },
  Friend: { screen: friend },
  Notification: { screen: fotification },
  More: { screen: more ,
    navigationOptions: {
      title: "More",
      tabBarIcon: (
        <Image
          style={{ width: 25, height: 25 }}
          source={require('./src/Image/iconMore.png')}
        />
      ),
      headerStyle: {
        backgroundColor: "green"
      },
      headerTitleStyle: {
        fontSize: 30,
        color: "white"
      }
      
    }}
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
