import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useEffect, useState} from "react";

export default function App() {
    const [distance, setDistance] = useState(-1);

      useEffect(()=>{
          setInterval(() => {
            fetch('http://fb21-128-62-106-199.ngrok.io/machines/adbee93e-0dff-45a2-a958-3e5c7fda6b76/distance').then((result)=>{
                result.json().then((result)=>{
                    setDistance(result.distance)
                })
            })
          }, 2000);
      });

      return (
        <View style={styles.container}>
          <Text>GAT Mobile App</Text>
          <Text style={{fontSize: 100, fontWeight: "bold"}}>{distance == -1 ? "Loading..." : distance}</Text>
            <Text>cm</Text>
          <StatusBar style="auto" />
        </View>
      );
}

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });


