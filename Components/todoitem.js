import React from 'react';
import {Text,TouchableOpacity,StyleSheet} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

export default function TodoItem({item,pressHandler}){
    return (
        <TouchableOpacity style={styles.item}>
            <Text>{item.text}</Text>
            <TouchableOpacity style={styles.deleteIcon} onPress={() =>pressHandler(item.key)}>
            <AntDesign name="delete" size={24} color="black" />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item:{
        padding:16,
        fontSize:15,
        color:'black',
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'solid',
        borderRadius:10,
        flexDirection:'row',
    },
    deleteIcon:{
        marginLeft:15
    }
});