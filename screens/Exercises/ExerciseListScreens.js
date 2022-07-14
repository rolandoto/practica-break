import React, { useEffect, useState, useContext  } from "react";
// import { Text, View } from "react-native";
import ExercisesListView from '../../components/ExerciseList'
import Layout from '../../components/layout'
//import { ProviderContext } from "../../components/providerContext";
    
// En esta pantalla {Tomás} desarrolla la "Screen" (pantalla) "Ejercicios"


const ExerciseListScreens = () =>(
    <ProviderContext>
        <Layout>
            <ExercisesListView />
        </Layout>
            
    </ProviderContext>
)


export default ExerciseListScreens;