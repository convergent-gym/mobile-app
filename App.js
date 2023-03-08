import { StatusBar } from "expo-status-bar";
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as DevMenu from "expo-dev-menu";

function Map() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        I'm Da Map
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MomScreen() {
  const [momVar, updateMom] = useState(0);
  const colors = ['#F3B5CF', '#FAF5AB', '#02ACA4', '#E581B1'];
  const words = ['Moms', 'MILFS', 'Cougars', 'Hot'];
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={
        [ shapes.circle, 
          {backgroundColor: colors[momVar]},
          {marginVertical: 50}
        ]
      }/>
      <Button 
        title = "Your MOM"
        onPress={() => updateMom((momVar + 1) % colors.length)}
      />
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Gym Map" component={Map} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Your Mom" component={MomScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
    fontFamily: 'monospace',
    color: "#F3B5CF",
  },
  body: {
    fontSize: 80,
    fontFamily: 'sans-serif',
  },
});

const shapes = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
})
