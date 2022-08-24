import React,{useState} from 'react';
import {Text, TextInput, Button, StyleSheet, View, Alert} from "react-native";

export default function AddTodo({submitHandler}){
    const [text,setText] = useState('');
    const submitBtnClicked = () =>{
        if (text.length > 3){
            submitHandler(text);
        }else{
            Alert.alert('OOPS!',
                'Todos must be 3 chars long!',
                [{text:"Understood"}]
            );
        }
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Add Todo"
                onChangeText={(val) => setText(val)}
            />
            <Button title='Add Todo' onPress={submitBtnClicked} color='coral' />
        </View>
    );
};

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
});