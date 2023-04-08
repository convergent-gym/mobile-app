import React, {useState} from 'react'
import { PrimaryColor } from '../../constants/theme';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function LinkButton(props: {text: string, onPressIn?: (e: GestureResponderEvent) => void, onPress?: (e: GestureResponderEvent) => void; }) {
    return (
        <TouchableOpacity onPressIn={props.onPressIn} onPress={props.onPress}>
            <Text style={{color: PrimaryColor}}>{props.text}</Text>
        </TouchableOpacity>
    )
}