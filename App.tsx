import React, {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initializeApp } from 'firebase/app';
import {db} from "./firebaseConfig";
import { BrandColor } from './src/constants/theme';
import { collection, onSnapshot, query, getDoc, doc, updateDoc } from 'firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/pages/LoginScreen/LoginScreen';
import GymSelecionScreen from './src/pages/GymSelectionScreen/GymSelectionScreen';

async function testDoc() {
  const docRef = doc(db, 'testCollection1', 'testDoc1');
  const docSnap = await getDoc(docRef);
  return docSnap;
}

const Stack = createNativeStackNavigator();



export default function App() {
  const [data, setData] = useState();
  onSnapshot(doc(db, 'SwoleManGym', 'machine1'), (doc) => {
    setData(doc.data().occupied);
    console.log(data);
  })

  const screenOptionsHeader = { 
    title: 'Swole Control',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: BrandColor,
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
      fontFamily: 'Roboto',
    } 
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      <Stack.Screen name="GymSelectionScreen" component={GymSelecionScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}