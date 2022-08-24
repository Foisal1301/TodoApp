import React, {useState} from 'react';
import {View, StyleSheet, FlatList,TouchableWithoutFeedback,Keyboard} from "react-native";
import Header from "./Components/header";
import TodoItem from './Components/todoitem';
import AddTodo from "./Components/addTodo";

export default function App(){
    const [todos,setTodos] = useState([
        {text:"Namaz",key:"3"},
        {text:"Coding",key:"2"},
        {text:"Poralekha",key:"1"},
    ]);

    const submitHandler = (text) =>{
        setTodos((prevTodos)=>{
            let k = "1";
            if (todos.length !== 0){
                k = parseInt(todos[0].key)+1;
                k = k.toString();
            }
            return [
                {text:text,key:k},
                ...prevTodos
            ]
        });
        Keyboard.dismiss();
    }

    const pressHandler = (key) =>{
        setTodos((prevTodos)=>{
            return prevTodos.filter(todo => todo.key != key)
        })
    }

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <AddTodo submitHandler={submitHandler} />
                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({item})=>(
                                <TodoItem pressHandler={pressHandler} item={item}/>
                            )
                            }
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    content:{
        flex:1,
        padding:40,
    },
    list:{
        flex:1,
        marginTop:20,

    }
})