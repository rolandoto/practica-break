

import React, { useState, useEffect, useContext } from "react";
import { FlatList } from "react-native-gesture-handler";
//import  {getExercisesHome}  from "../api";
//import ExerciseItem from "./ButtonSelect";
//import StateContext from "./providerContext";



const ExercisesListView  = () =>{

    const [exercises, SetExercises] = useState([]);
    const {selectedId} = useContext(StateContext)

    const fetchExercises = async () =>{
       const data = await getExercisesHome();
       SetExercises(data);
    };
    
    useEffect(() =>{
        fetchExercises();
    }, []);

    const renderItem = ({ item }) =>{
        return <ExerciseItem exercise = {item} />

    };
    return (
        <>
        <FlatList
            style = {{ width: '100%', height: 25}} 
            data = {exercises}
            keyExtractor = {( item ) =>  item.id_ejercicios+'' }
            renderItem = { renderItem }    
            extraData = { selectedId }
        />
        </>
        
                 
    );                      
};

export default ExercisesListView;

