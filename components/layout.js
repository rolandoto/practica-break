

import React from "react";
import { View, Text ,StyleSheet} from "react-native";

const Layout = ({children}) =>{
    return <View style={styles.container}>{children}</View>
    
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'whitesmoke',
        padding: 15,
        flex: 1, 
        alignItems: 'center',

    }

})

export default Layout;