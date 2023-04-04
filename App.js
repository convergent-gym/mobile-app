import React, {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initializeApp } from 'firebase/app';
import {db} from "./firebaseConfig";
import { collection, onSnapshot, query, getDoc, doc, updateDoc } from 'firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

async function testDoc() {
  const docRef = doc(db, 'testCollection1', 'testDoc1');
  const docSnap = await getDoc(docRef);
  return docSnap;
  /* console.log(docSnap.data())
  return docSnap.data().bool; */
}

const Stack = createNativeStackNavigator();

function MainScreen({navigation, data}) {
  return (
    <View style={styles.container}>
      <View style={[ styles.circle, { backgroundColor: (data ? '#6F9A44' : '#C3DAC3') } ]}/>
      <StatusBar style="auto" />
    </View>
  )
}

export default function App() {
  const [data, setData] = useState();
  onSnapshot(doc(db, 'SwoleManGym', 'machine1'), (doc) => {
    setData(doc.data().occupied);
    console.log(data);
  })

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
        name = "MainScreen"
        children={() => <MainScreen data={data} />}
        options={{ 
          title: 'Swole Control',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#146D5D',
          },
          headerTitleStyle: {
            color: 'white',
            fontSize: 30,
            fontFamily: 'Roboto',
          } 
        }} 
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  body: {
    color: 'green',
    fontSize: 60,
  },

  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});
