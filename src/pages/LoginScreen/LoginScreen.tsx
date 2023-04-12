import React, { useCallback, useState, useEffect } from 'react'
import { BrandColor, PrimaryColor } from '../../constants/theme';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import BigButton from '../../components/BigButton/BigButton';
import LinkButton from '../../components/LinkButton/LinkButton';
import AppLoading from 'expo-app-loading';
import useFonts from '../../../hooks/useFonts';

export default function LoginScreen({navigation}) {
    const [signInSignUp, setSignInSignUp] = useState<'SignIn' | 'SignUp'>('SignIn');
    const LoadFonts = async () => {
        await useFonts();
      };
    
      const [IsReady, SetIsReady] = useState(false);
    
      if (!IsReady) {
        return (
          <AppLoading
            startAsync={LoadFonts}
            onFinish={() => SetIsReady(true)}
            onError={() => {}}
          />
        );
      }


    return (
      <KeyboardAvoidingView style={styles.container} behavior='height'>
  
            <Image
                style={styles.logo}
                source={require("../../../assets/dumbbell-logo.png")}
            />

            <View> 
                {/* This wrapping view is necessary for the keyboard avoiding view to work nicely */}
                <Text style={[styles.titleText]}>Swole Control</Text>
            </View>
            
            <View style={{display: "flex", marginVertical: 40, flexDirection: "row", justifyContent: "space-evenly", width: "80%"}}>
                <TouchableOpacity activeOpacity={.8} onPressIn={()=>{setSignInSignUp('SignIn')}}>
                    <Text style={signInSignUp == 'SignIn' ? styles.optionSelected : styles.optionDeselected}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.8} onPressIn={()=>{setSignInSignUp('SignUp')}}>
                    <Text style={signInSignUp == 'SignUp' ? styles.optionSelected : styles.optionDeselected}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        
        <View style={[styles.flexAbsoluteCenter, {marginVertical: 20}]}>
            {signInSignUp === 'SignUp' && <TextInput placeholder='Name' style={styles.textInput}/>}
            <TextInput placeholder='Email Address' style={styles.textInput}/>
            <TextInput placeholder='Password' secureTextEntry={true} style={[styles.textInput, styles.passwordInput]}/>
        </View>

        <View style={[styles.flexAbsoluteCenter, {marginVertical: 20}]}>
            <BigButton text={signInSignUp == "SignIn" ? 'Sign In' : "Sign Up"} onPressIn={()=>{navigation.navigate('GymSelectionScreen')}}/>

            {
                signInSignUp === "SignIn" && 
                <LinkButton text={"Forgot Password?"}/>
            }

            {
                signInSignUp === "SignUp" && 
                <Text style={{color: PrimaryColor, width: "80%", textAlign: "center", fontFamily: 'K2D'}}>
                    By signing up, you agree to our Privacy Policy and Terms of Service.
                </Text>
            }
        </View>
      </KeyboardAvoidingView>
    )
}

  const styles = StyleSheet.create({
    flexAbsoluteCenter: {
        width: "100%", 
        display: "flex", 
        alignItems: "center"
    },
    textInput:{
        fontFamily: 'K2D',
        backgroundColor: "#FFFFFF",
        height: 40,
        borderRadius: 10,
        padding: 5,
        margin: 5,
        width: "85%"
    },
    passwordInput: {
       
    },
    optionDeselected: {
        color: '#FFFFFF',
        fontFamily: 'K2D-Bold',
        fontSize: 24
    },
    optionSelected: {
        color: '#A0C182',
        fontFamily: 'K2D-Bold',
        fontSize: 24
    },
    logo: {
        height: 60,
        width: 100,
    },
    container: {
      flex: 1,
      backgroundColor: BrandColor,
      alignItems: 'center',
      justifyContent: 'center'
    },
    body: {
      color: 'green',
      fontFamily: 'K2D',
      fontSize: 60,
    },
    titleText: {
      color: '#FFFFFF',
      fontFamily: 'K2D-Medium',
      fontSize: 48
    },
  });