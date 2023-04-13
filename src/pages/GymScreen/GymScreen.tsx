import React, { useState } from 'react'
import { BrandColor, PrimaryColor } from '../../constants/theme';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Modal, Dimensions } from 'react-native';
import { TestMap } from '../../api/testData';
import LinkButton from '../../components/LinkButton/LinkButton';
import Map from '../../api/types/map';
import { MachineStatus } from '../../api/types/machine';
import { db } from '../../../firebaseConfig';
import Machine from '../../api/types/machine';
import { collection, onSnapshot, getDoc, doc } from 'firebase/firestore';
import MachineDetailScreen from '../../components/MachineDetail/MachineDetail';
import { BottomSheet } from 'react-native-btr';
import Gym from '../../api/types/gym';

export default function GymScreen({route, navigation}) {
    const { gym }: {gym: Gym} = route.params;
    const[modalMachine, setModalMachine] = useState<Machine | null>(null);

    const [data, setData] = useState();
    onSnapshot(doc(db, 'SwoleManGym', 'machine1'), (doc) => {
        setData(doc.data().occupied);
    })

    function statusToColor(stat: MachineStatus) {
        switch(stat) {
            case MachineStatus.Open:
                return "green"
            case MachineStatus.Taken:
                return "red"
            case MachineStatus.Maintenance:
                return "grey"
        }
        return "";
    }

    function getMapBounds(map: Map) {
        let max_width = -1;
        let max_height = -1;
        for(let i = 0; i < map.items.length; i++) {
            let item_rightmost = map.items[i].width + map.items[i].x_pos;
            let item_bottommost = map.items[i].height + map.items[i].y_pos;
            
            if(item_rightmost > max_width)
                max_width = item_rightmost;
            
            if(item_bottommost > max_height)
                max_height = item_bottommost;
        }
        max_height += 10;
        max_width += 10;
        return { max_width, max_height};
    }
    
    
    return (
      <SafeAreaView style={styles.container}>
            <View style={{width: "90%", marginVertical: 30}}> 
                <LinkButton text={"Back"} onPressIn={()=>{navigation.pop()}}/>
                <Text style={styles.titleText}>{gym.name}</Text>
                <Text style={{color: PrimaryColor, fontSize: 24}}>
                    Showing all machines
                </Text>     
            </View>
            <ScrollView style={{backgroundColor: "white", width: "100%", height: "100%"}} showsVerticalScrollIndicator={false}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor: "white", width: "100%", height: "100%"}}>

            {/* Dummy view is necessary to allow scrolling */}
            <View style={{width: getMapBounds(TestMap).max_width, height: getMapBounds(TestMap).max_height}}></View>
                {
                    TestMap.items.map((item, i)=>{
                        //item.status = Math.random() > .4 ? MachineStatus.Open : MachineStatus.Taken;
                        item.status = MachineStatus.Open;
                        if(i == 53) {
                            item.status = MachineStatus.Maintenance;
                        }
                        return(
                            <View key={i} style={[styles.machineContainer, { transform: item.rotation == 0 ? "none" : "rotate("+item.rotation+"deg)", left: item.x_pos, top: item.y_pos,  height: item.height,  width: item.width, backgroundColor: item.id == "machine_1" ? (data ? "green" : "red") : statusToColor(item.status)}]}>
                               <TouchableOpacity onPress={()=>{setModalMachine(item)}} style={{width: "100%", height: "100%", display: "flex", justifyContent: "center"}}>    
                                    <Text style={styles.machineText}>{item.name}</Text>
                               </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
            </ScrollView>
            <BottomSheet
                visible={modalMachine !== null}
                onBackButtonPress={()=>{setModalMachine(null)}}
                onBackdropPress={()=>{setModalMachine(null)}}
                >
                    <View style={{width: "100%", justifyContent: "center", alignItems: "center"}}>
                        <View style={{padding: 10, paddingBottom: 90, backgroundColor: BrandColor, width: "95%", borderTopRightRadius: 20, borderTopLeftRadius: 20}}>
                            <MachineDetailScreen machine={modalMachine}/>
                        </View>
                    </View>
            </BottomSheet>
      </SafeAreaView>
    )
}

  const styles = StyleSheet.create({
    machineContainer: {
        position: "absolute", 
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    machineText: {
        color: "white",
        fontWeight: "600",
        fontSize: 5,
        textAlign: "center"
    },
    container: {
      flex: 1,
      backgroundColor: BrandColor,
      alignItems: 'center'
    },
    titleText: {
      color: '#FFFFFF',
      fontSize: 33
    },
  });