//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView
} from "react-native";
import constants from "jest-haste-map/build/constants";
import { color } from "react-native-reanimated";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import CalendarPicker from 'react-native-calendar-picker';
// create a component55823
class SignUp extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    email: "",
    password: ""
  };
  onChangeEmail = Email => {
    this.setState({ email: Email });
  };
  onChangePassword = Password => {
    this.setState({ password: Password });
  };
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerRoot}>
            <Image
              style={styles.LogoImage}
              source={require("../Image/logo.png")}
            />
          </View>
          <View style={styles.bodyRoot}>
            <Text style={styles.textTitle}>
              Login With <Text style={styles.textTitle1}>App</Text>
            </Text>
            <View style={styles.inputBody}>
              <Image
                style={styles.iconMail}
                source={require("../Image/mail.png")}
                resizeMode="contain"
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor="white"
                style={styles.inPut}
                onChangeText={Email => this.onChangeEmail(Email)}
              />
            </View>
            <View style={styles.inputBody}>
              <Image
                style={styles.iconMail}
                source={require("../Image/key.png")}
                resizeMode="contain"
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="white"
                style={styles.inPut}
                onChangeText={Password => this.onChangePassword(Password)}
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={styles.footerRoot}>
            <TouchableOpacity
              style={styles.buttonSignIn}
              onPress={() =>
                this.state.email == "Hi" && this.state.password === "hi"
                  ? this.props.navigation.navigate("Main")
                  : alert("Something when wrong!!!")
              }
            >
              <Text style={styles.textButton}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
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
    flex: 0.2,
    alignItems: "center"
  },
  bodyRoot: {
    flex: 0.6,
    alignItems: "center",
    top: -110
  },
  textTitle: {
    fontSize: 40,
    fontWeight: "500",
    color: "white"
  },
  textTitle1: {
    fontSize: 60,
    fontWeight: "900",
    color: "white"
  },
  inputBody: {
    borderBottomWidth: 1,
    width: 340,
    height: 55,
    borderColor: "white",
    flexDirection: "row"
  },
  inPut: {
    flex: 0.9,
    fontSize: 20,
    left: 13,
    color: "white"
  },
  iconMail: {
    flex: 0.1,
    width: 25,
    height: 25,
    top: 10
  },

  buttonSignUp: {
    top: -80,
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
  footerRoot: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  LogoImage: {
    width: 350,
    height: 350
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
  }
});

//make this component available to the app
export default SignUp;
