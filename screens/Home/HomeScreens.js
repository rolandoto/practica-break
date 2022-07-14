
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

// En esta pantalla {Neider} desarrolla el "Home"

const HomeScreen = () => {

    useEffect(() =>{
        console.log('Succes')
    }, []) 
    return  (
        <View style={{flex: 1, alignContent: 'center', backgroundColor: 'red'}}>
            <Text style={{alignItems: 'center', justifyContent: 'center'}}>
                FORMS asfsadfsd
            </Text>
        </View>
        
    );
    
}

export default HomeScreen