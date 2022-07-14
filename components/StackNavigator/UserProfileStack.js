import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions,Image } from "react-native";
import { Icon } from '@rneui/base';


const Accout  =() =>{

    return (

        <View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",}} >
                    <View style={{
                        marginRight: 40,
                        marginLeft: 10,
                        marginTop: 10,
                        paddingTop: 20,
                        paddingBottom: 25,
                        backgroundColor: '#68a0cf',
                        borderRadius: 40,
                        borderWidth: 1,
                        width:75,
                        borderColor: '#fff'
                    }} >
                        <Text style={{color:"white",
                                    textAlign:"center",
                                    fontSize:30,
                                    justifyContent:"flex-end"}} >J</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:20}} >Juan pablo arroyave Rios</Text>
                    </View>
                </View>
            
                <View style={{marginTop:-27,marginLeft:20}} >
                    <Text style={{fontSize:15,color:"gray",textAlign:"center"}} >pabloooo3g27@gmail.com</Text>
                </View>

                <TouchableOpacity style={styles.button2} >
                    
                        <View style={{position:"absolute",left:30}} > 
                            <Image 
                                style={styles.tinyLogo}
                                source={{
                                uri: 'https://e7.pngegg.com/pngimages/450/269/png-clipart-space-gray-iphone-x-showing-ios-and-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-gadget-electronics-thumbnail.png',
                            }} />
                        </View>
                        <Text style={{color:"white",fontWeight:"800",fontSize:20}} >7 dias gratis</Text>
                        <Text style={{color:"white",fontWeight:"500"}} >¡Prueba la version premium!</Text>
                </TouchableOpacity> 
            
            <View style={{marginTop:40,marginLeft:20}} >
                <View style={{flexDirection:"row",alignItems:"center"}} >
                    <Icon type='material-community' name="crown" size={26} color="orange"/>
                        <Text style={{fontSize:15,color:"black",fontWeight:"500"}} >
                            Version Premium</Text>
                    </View>
                </View>

            <View style={{marginTop:40,marginLeft:20}} >
                <View style={{flexDirection:"row",alignItems:"center"}} >
                    <Icon type='material-community' name="heart" size={26} color="red" />
                        <Text style={{fontSize:15,color:"black",textAlign:"center"}} >
                            Evaluar esta aplicaion</Text>
                </View>
            </View>

            <View style={{marginTop:40,marginLeft:20}} >
                <View style={{flexDirection:"row",alignItems:"center"}} >
                    <Icon type='material-community' name="mail" size={26} color="green"/>
                        <Text style={{fontSize:15,color:"black"}} >
                        Contacto</Text>
                </View>
            </View>

            <View style={{marginTop:40,marginLeft:20}} >
                <View style={{flexDirection:"row",alignItems:"center"}} >
                    <Icon type='material-community' name="image" size={26} color="orange"/>
                        <Text style={{fontSize:15,color:"black"}} >
                            Editor de entrenamiento terminado</Text>
                </View>
            </View>

            <View style={{marginTop:40,marginLeft:20}} >
                <View style={{flexDirection:"row",alignItems:"center"}} >
                    <Icon type='material-community' name="comma" size={26} color="#1a73e8"/>
                    <Icon type='material-community' name="comma" size={26} color="#1a73e8"/>
                    <Text style={{fontSize:15,color:"black"}} >
                        Dudas frecuentes</Text>
                </View>
            </View>

            <View style={{marginTop:40,marginLeft:20}} >
                <View style={{flexDirection:"row",alignItems:"center"}} >
                    <Icon type='material-community' name="instagram" size={26} color="orange"/>
                        <Text style={{fontSize:15,color:"black"}} >
                            Redes Sociales</Text>
                </View>
            </View>

            <View style={{marginTop:40,marginLeft:20}} >
                <View style={{flexDirection:"row",alignItems:"center"}} >
                    <Icon type='material-community' name="share" size={26} color="purple"/>
                    <Text style={{fontSize:15,color:"black"}} >
                
                        Share</Text>
                </View>
            </View>

        </View>
    )
}

export default Accout


const styles = StyleSheet.create({
    button2: {
    alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 30,
      paddingHorizontal: 1,
      borderRadius:10,
      elevation: 1,
      backgroundColor: '#6dc777',
      margin:16,
      width:"93%",
      marginTop:40
  },
  tinyLogo: {
    width: 35,
    height: 70,
  },
})