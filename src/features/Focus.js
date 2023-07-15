import React , {useState} from 'react';
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import {colors} from '../utils/colors';
import { RoundedButton } from '../components/roundedbutton';

export const Focus = () => {
    const [subject,setSubject] = useState(null)
    console.log(subject)
    return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} onChangeText={setSubject} label="What would you like to focus on ?"/>
        <RoundedButton title="+" size={50}/>
        </View>

    </View>);
    
}



const styles = StyleSheet.create({
    container: {
        flex : 1
    },
    text:{
        color:colors.white
    },
    textInput:{
        flex:0.8
    },
    inputContainer:{
        padding:10,
        
    }
});
