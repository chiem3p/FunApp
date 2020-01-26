//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView ,} from 'react-native';
import constants from 'jest-haste-map/build/constants';
import { color } from 'react-native-reanimated';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import CalendarPicker from 'react-native-calendar-picker';
// create a component55823
class SignUp extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {

        return (
            <View style={styles.container}>
               <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.headerRoot}>
                        <Image style={styles.LogoImage} source={require('../Image/logo.png')} />
                    </View>
                    <View style={styles.bodyRoot}>
                        <Text style={styles.textTitle}>Sign Up <Text style={styles.textTitle1}>App</Text></Text>
                        <View style={styles.inputBody}>
                            <Image style={styles.iconMail} source={require('../Image/user.png')} resizeMode='contain' />
                            <TextInput placeholder='First name' placeholderTextColor='white' style={styles.inPut} />
                        </View>
                        <View style={styles.inputBody}>
                            <Image style={styles.iconMail} source={require('../Image/user.png')} resizeMode='contain' />
                            <TextInput placeholder='Last name' placeholderTextColor='white' style={styles.inPut} />
                        </View>
                        <View style={styles.inputBody}>
                            <Image style={styles.iconMail} source={require('../Image/mail.png')} resizeMode='contain' />
                            <TextInput placeholder='Email' placeholderTextColor='white' style={styles.inPut} />
                        </View>
                        <View style={styles.inputBody}>
                            <Image style={styles.iconMail} source={require('../Image/date.png')} resizeMode='contain' />
                            <TextInput placeholder='Birthday' placeholderTextColor='white' style={styles.inPut} />
                        </View>
                        <View style={styles.inputBody}>
                            <Image style={styles.iconMail} source={require('../Image/key.png')} resizeMode='contain' />
                            <TextInput placeholder='Password' placeholderTextColor='white' style={styles.inPut} />
                        </View>
                        <View style={styles.inputBody}>
                            <Image style={styles.iconMail} source={require('../Image/key.png')} resizeMode='contain' />
                            <TextInput placeholder='Comfirm password' placeholderTextColor='white' style={styles.inPut} />
                        </View>
                    </View>
                    <View style={styles.footerRoot}>
                        <TouchableOpacity style={styles.buttonSignUp} onPress={() => this.props.navigation.navigate('Main')}>
                            <Text style={styles.textButton}>Sign Up</Text></TouchableOpacity>
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
        alignItems: 'center',
        backgroundColor: '#ffbf00',
    },
    headerRoot: {
        flex: 0.2,
        alignItems: 'center'
    },
    bodyRoot: {
        flex: 0.6,
        alignItems: 'center',
        top: -110,
    },
    textTitle: {
        fontSize: 40,
        fontWeight: '500',
        color: 'white'
    }, textTitle1: {
        fontSize: 60,
        fontWeight: '900',
        color: 'white'
    },
    inputBody: {
        borderBottomWidth: 1,
        width: 340,
        height: 55,
        borderColor: 'white',
        flexDirection: 'row'
    },
    inPut: {
        flex: 0.9,
        fontSize: 20,
        left: 13,
        color: 'white'
    },
    iconMail: {
        flex: 0.1,
        width: 25,
        height: 25,
        top: 10,
    },

    buttonSignUp: {
        top:-80,
        width: 320,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },
    footerRoot: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    LogoImage: {
        width: 350,
        height: 350,
    },
});

//make this component available to the app
export default SignUp;

