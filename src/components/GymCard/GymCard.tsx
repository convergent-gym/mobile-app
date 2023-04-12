import React, {useState} from 'react'
import { PrimaryColor } from '../../constants/theme';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Gym from '../../api/types/gym';
import AppLoading from 'expo-app-loading';
import useFonts from '../../../hooks/useFonts';

export default function GymCard(props: {gym: Gym, onPressIn?: (e: GestureResponderEvent) => void, onPress?: (e: GestureResponderEvent) => void; }) {
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
    
    function timeNumberToString(time: number) {
        let am_pm = "AM";
            
        if(time > 12) {
            am_pm = "PM";
            time -= 12;
        }

        let minute = time % 1
        let hour = time - minute;
        minute = minute * 60;

        let time_str = minute == 0 ? +hour : `${hour}:${minute}`; 
        
        return `${time_str} ${am_pm}`;
    }

    function is24Hour(gym: Gym) {
        return (gym.openTime == 0 && gym.closeTime == 0);
    }

    function getBusyString(gym: Gym) {
        if(gym.machineUse < .3)
            return "Not very busy"
        if(gym.machineUse < .6)
            return "Somewhat busy"
        if(gym.machineUse < .75)
            return "Pretty busy"
        
        return "Very busy"
    }

    function isGymOpen(gym: Gym) {
        if(is24Hour(gym))
            return true;

        let current_datetime = new Date();
        let current_time = current_datetime.getHours() + (current_datetime.getMinutes()/60)

        return (current_time >= gym.openTime) && (current_time < gym.closeTime);
    }
    
    return (
        <TouchableOpacity activeOpacity={.8} style={{width: "100%", paddingHorizontal: "5%"}}  onPressIn={props.onPressIn} onPress={props.onPress}>
                            <View style={styles.gymCard}>
                                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                                    <View>
                                        <Text style={styles.gymTitle}>{props.gym.name}</Text>
                                        <Text style={styles.gymSubtitle}>{isGymOpen(props.gym) ? getBusyString(props.gym) : "Currently closed"}</Text>
                                        <Text style={styles.gymSubtitle}>{is24Hour(props.gym) ? "Open 24 Hours" : `${timeNumberToString(props.gym.openTime)} - ${timeNumberToString(props.gym.closeTime)}`}</Text>
                                    </View>
                                    <Ionicons name="arrow-forward-circle-outline" size={32} color="black" />
                                </View>
                            </View>
                        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gymTitle: {
        fontFamily: 'K2D-Bold',
        fontSize: 20
    },
    gymSubtitle: {
        fontFamily: 'K2D',
        fontSize: 16
    },
    gymCard: {
        backgroundColor: PrimaryColor,
        borderRadius: 10,
        width: "100%",
        padding: 10,
        marginVertical: 2
    },
});