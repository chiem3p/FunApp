//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import constants from "jest-haste-map/build/constants";
import { color } from "react-native-reanimated";
import { LearnMoreLinks } from "react-native/Libraries/NewAppScreen";

// create a component55823
class Root extends Component {
  static navigationOptions = {
    title: "Account Setting",
    headerTintColor: "white",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 29,
      // left: -142
    },
    headerStyle: {
      backgroundColor: "green"
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Image style={styles.backgroundImage} source={require('../Image/background.png')}  /> */}
        <View style={styles.headerRoot}>
          {/* <Text style={styles.textTitle}>Sign Up <Text style={styles.textTitle1}>App</Text></Text> */}
          <View style={styles.inputBody}>
            <TouchableOpacity
              style={styles.buttonSignUp}
              onPress={() => this.props.navigation.navigate("MyProfile")}
              
            >
              <Text style={styles.textButton}>My account</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputBody}>
            <TouchableOpacity
              style={styles.buttonSignUp}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={styles.textButton}>Rate the App</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputBody}>
            <TouchableOpacity
              style={styles.buttonSignUp}
              onPress={() => this.props.navigation.navigate("Main")}
            >
              <Text style={styles.textButton}>Security</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputBody}>
            <TouchableOpacity
              style={styles.buttonSignUp}
              onPress={() => this.props.navigation.navigate("Auth")}
            >
              <Text style={styles.textButton}>...</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footerRoot}></View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "#ffbf00"
  },

  headerRoot: {
    flex: 0.8
  },
  inputBody: {
    borderBottomWidth: 1,
    width: 340,
    height: 55,
    borderColor: "white",
    justifyContent: "center",
    left: 30
  },
  textButton: {
    // justifyContent: "center",
    // alignItems: "center",
    fontSize: 22,
    color: "white"
  },

  footerRoot: {
    flex: 0.2
  }
});

//make this component available to the app
export default Root;
