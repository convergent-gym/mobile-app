import React, {useState} from 'react'
import { BrandColor, PrimaryColor } from '../../constants/theme';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import BigButton from '../../components/BigButton/BigButton';
import LinkButton from '../../components/LinkButton/LinkButton';
import { TestMap } from '../../api/testData';
import { MachineType } from '../../api/types/machine';
import AppLoading from 'expo-app-loading';
import useFonts from '../../../hooks/useFonts';

export default function MachineDetailScreen({route, navigation}) {
    const [signInSignUp, setSignInSignUp] = useState<'SignIn' | 'SignUp'>('SignIn');
    const item = route.params.machine;
    const [IsReady, SetIsReady] = useState(false);
    const LoadFonts = async () => {
      await useFonts();
    };
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
      <SafeAreaView style={styles.container}>
            <View style={{padding:  10}}> 
                <Text style={styles.titleText}>{item.name}</Text>
                <LinkButton onPressIn={()=>{navigation.pop()}} text="Back"/>
            </View>

            <View style={[styles.flexAbsoluteCenter]}>
                <Image
                    style={styles.machineImage}
                    source={require("../../../assets/power-rack.png")}
                />

                {/* TODO: Export to own component */}
                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%"}}>
                    <Text style={styles.detailTitle}>Type</Text>
                    <Text style={styles.detailContent}>{MachineType[item.type]}</Text>
                </View>

                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%"}}>
                    <Text style={styles.detailTitle}>Model Num</Text>
                    <Text style={styles.detailContent}>{item.model_number}</Text>
                </View>
            </View>

            
      </SafeAreaView>
    )
}

  const styles = StyleSheet.create({
    detailTitle: {
        color: "white",
        fontFamily: 'K2D-Bold',
        fontSize: 26
    },
    detailContent: {
        color: "white",
        fontFamily: 'K2D',
        fontSize: 26
    },
    flexAbsoluteCenter: {
        width: "100%", 
        display: "flex", 
        alignItems: "center"
    },
    textInput:{
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
    machineImage: {
        width: "60%",
        height:  "60%",
    },
    container: {
      backgroundColor: BrandColor,
      height: "100%"
    },
    body: {
      color: 'green',
      fontFamily: 'K2D',
      fontSize: 60,
    },
    titleText: {
      color: '#FFFFFF',
      fontFamily: 'K2D-Bold',
      fontSize: 48
    },
  });