import React, {useState} from 'react'
import { BrandColor, PrimaryColor } from '../../constants/theme';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import BigButton from '../../components/BigButton/BigButton';
import LinkButton from '../../components/LinkButton/LinkButton';
import { TestMap } from '../../api/testData';
import Machine, { MachineType } from '../../api/types/machine';
import { MachineStatus } from '../../api/types/machine';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MachineDetailScreen(props: {machine: Machine}) {

    return (
      <View style={styles.container}>
            { props.machine !== null &&
                <View>
                    <View style={{padding:  10}}> 
                        <Text style={styles.titleText}>{props.machine.name}</Text>
                    </View>

                    { props.machine.status !== MachineStatus.Maintenance && 
                        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                            <View>
                                <View style={{borderWidth: 2, borderColor: "#000000", borderRadius: 10, backgroundColor: PrimaryColor, padding: 2, height: 50, display: "flex", justifyContent: "center"}}>
                                    <Text style={styles.spotlightContent}>5</Text>
                                </View>
                                <Text style={styles.detailContent}>Avaliable Now</Text>
                            </View>
                            <View>
                                <View style={{borderWidth: 2, borderColor: "#000000", borderRadius: 10, backgroundColor: PrimaryColor, padding: 2, height: 50}}>
                                    <Text style={styles.spotlightContent}>5 - 15</Text>
                                    <Text style={styles.spotlightContentSm}>Mins</Text>
                                </View>
                                <Text style={styles.detailContent}>Average Wait</Text>
                            </View>
                        </View>
                    }

                    {  props.machine.status !== MachineStatus.Maintenance ||
                        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"}}>
                             <Ionicons name="warning" size={32} color="white" />
                             <Text style={styles.detailContent}>This machine is under maintence</Text>
                        </View>
                    }

                    <View style={[styles.flexAbsoluteCenter, {marginTop: 30}]}>
                        {/* TODO: Export to own component */}
                        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "80%"}}>
                            <Text style={styles.detailTitle}>Type</Text>
                            <Text style={styles.detailContent}>{MachineType[props.machine.type]}</Text>
                        </View>

                        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "80%"}}>
                            <Text style={styles.detailTitle}>Model</Text>
                            <Text style={styles.detailContent}>{props.machine.model_number}</Text>
                        </View>
                    </View>
                </View>
            }       
    </View>)
}

  const styles = StyleSheet.create({
    detailTitle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
    detailContent: {
        color: "white",
        fontSize: 18
    },
    spotlightContent: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 24
    },
    spotlightContentSm: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 12
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
      backgroundColor: BrandColor
    },
    body: {
      color: 'green',
      fontSize: 60,
    },
    titleText: {
      color: '#FFFFFF',
      fontWeight: "bold",
      fontSize: 36
    },
  });