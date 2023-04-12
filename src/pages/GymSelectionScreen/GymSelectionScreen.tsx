import React, { useState } from 'react'
import { BrandColor, PrimaryColor } from '../../constants/theme';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Gyms } from '../../api/testData';
import GymCard from '../../components/GymCard/GymCard';
import LinkButton from '../../components/LinkButton/LinkButton';
import AppLoading from 'expo-app-loading';
import useFonts from '../../../hooks/useFonts';

export default function GymSelecionScreen({navigation}) {

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
      <SafeAreaView style={styles.container}>
            <View style={{width: "90%", marginVertical: 30}}> 
                <LinkButton text={"Log Out"} onPressIn={()=>{navigation.navigate('LoginScreen')}}/>
                <Text style={[styles.titleText, {fontFamily: 'K2D'}]}>Welcome, Craig</Text>
                <Text style={{color: PrimaryColor, fontSize: 24, fontFamily: 'K2D'}}>
                    Gyms near you
                </Text>     
            </View>

            <ScrollView style={{width: '100%'}}>
                {Gyms.map((gym, i) => (<GymCard gym={gym} key={i} onPress={()=>{navigation.navigate("GymScreen")}}/>))}
            </ScrollView>
      </SafeAreaView>
    )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: BrandColor,
      alignItems: 'center'
    },
    titleText: {
      color: '#FFFFFF',
      fontFamily: 'K2D-Medium',
      fontSize: 36
    },
  });