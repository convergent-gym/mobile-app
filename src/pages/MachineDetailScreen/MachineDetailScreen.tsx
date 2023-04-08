import React, {useState} from 'react'
import { BrandColor, PrimaryColor } from '../../constants/theme';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import BigButton from '../../components/BigButton/BigButton';
import LinkButton from '../../components/LinkButton/LinkButton';
import { TestMap } from '../../api/testData';
import { MachineType } from '../../api/types/machine';

export default function MachineDetailScreen({navigation}) {
    const [signInSignUp, setSignInSignUp] = useState<'SignIn' | 'SignUp'>('SignIn');

    return (
      <SafeAreaView style={styles.container}>
            <View style={{padding:  10}}> 
                <Text style={styles.titleText}>{TestMap.items[0].name}</Text>
                <LinkButton onPressIn={()=>{navigation.pop()}} text="Back"/>
            </View>

            <View style={[styles.flexAbsoluteCenter]}>
                <Image
                    style={styles.machineImage}
                    source={require("../../../assets/lat-pulldown.png")}
                />

                {/* TODO: Export to own component */}
                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%"}}>
                    <Text style={styles.detailTitle}>Type</Text>
                    <Text style={styles.detailContent}>{MachineType[TestMap.items[0].type]}</Text>
                </View>

                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%"}}>
                    <Text style={styles.detailTitle}>Model Num</Text>
                    <Text style={styles.detailContent}>{TestMap.items[0].model_number}</Text>
                </View>
            </View>

            
      </SafeAreaView>
    )
}

  const styles = StyleSheet.create({
    detailTitle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 26
    },
    detailContent: {
        color: "white",
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
        fontWeight: 'bold',
        fontSize: 24
    },
    optionSelected: {
        color: '#A0C182',
        fontWeight: 'bold',
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
      fontSize: 60,
    },
    titleText: {
      color: '#FFFFFF',
      fontSize: 48
    },
  });