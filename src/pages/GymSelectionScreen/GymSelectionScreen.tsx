import React from 'react'
import { BrandColor, PrimaryColor } from '../../constants/theme';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Gyms } from '../../api/testData';
import GymCard from '../../components/GymCard/GymCard';
import LinkButton from '../../components/LinkButton/LinkButton';

export default function GymSelecionScreen({navigation}) {
    return (
      <SafeAreaView style={styles.container}>
            <View style={{width: "90%", marginVertical: 30}}> 
                <LinkButton text={"Log Out"} onPressIn={()=>{navigation.navigate('LoginScreen')}}/>
                <Text style={styles.titleText}>Welcome, Craig</Text>
                <Text style={{color: PrimaryColor, fontSize: 24}}>
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
      fontSize: 36
    },
  });