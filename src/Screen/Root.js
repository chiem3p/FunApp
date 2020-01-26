//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import constants from "jest-haste-map/build/constants";
import { color } from "react-native-reanimated";

// create a component55823
class Root extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Image style={styles.backgroundImage} source={require('../Image/background.png')}  /> */}
        <View style={styles.headerRoot}>
          <Image
            style={styles.LogoImage}
            source={require("../Image/logo.png")}
          />
        </View>

        <View style={styles.bodyRoot}>
          <TouchableOpacity
            style={styles.buttonSignUp}
            onPress={() => this.props.navigation.navigate("SignUp")}
          >
            <Text style={styles.textButton}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSignIn}
            onPress={() => this.props.navigation.navigate("SignIn")}
          >
            <Text style={styles.textButton}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.guest}
            onPress={() => this.props.navigation.navigate("Main")}
          >
            <Text style={styles.textGuest}>Continue as guest</Text>
          </TouchableOpacity>
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
    alignItems: "center",
    backgroundColor: "#ffbf00"
  },

  headerRoot: {
    flex: 0.3,
    // justifyContent:'center',
    alignItems: "center"
  },
  bodyRoot: {
    flex: 0.5,
    top: 40,
    // backgroundColor:'red',
    // justifyContent: 'center',
    alignItems: "center"
  },
  buttonSignUp: {
    width: 320,
    height: 60,
    borderRadius: 30,
    backgroundColor: "gray",
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonSignIn: {
    width: 320,
    height: 60,
    borderRadius: 30,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center"
  },
  textButton: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white"
  },
  guest: {
    top: 14
  },
  textGuest: {
    color: "white",
    fontWeight: "700",
    fontSize: 20
  },
  footerRoot: { flex: 0.2 },
  LogoImage: {
    width: 350,
    height: 350
  }
});

//make this component available to the app
export default Root;
