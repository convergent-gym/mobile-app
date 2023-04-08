import React, {useState} from 'react'
import { PrimaryColor } from '../../constants/theme';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function BigButton(props: {text: string, onPressIn?: (e: GestureResponderEvent) => void, onPress?: (e: GestureResponderEvent) => void; }) {
    return (
        <TouchableOpacity style={styles.button} onPressIn={props.onPressIn} onPress={props.onPress}>
            <Text style={{fontWeight: "bold"}}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        height: 40,
        margin: 5,
        width: '85%',
        backgroundColor: PrimaryColor,
        display: "flex", 
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    },
});