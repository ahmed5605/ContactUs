import React, { useEffect, useState } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import Colors from '../style/Colors';


const Input = (props) => {

    const { value, placeholder, onChange, messageInput, keyboard } = props;

    return (
        <View style={styles.container} >
            <TextInput
                placeholder={placeholder}
                onChangeText={onChange}
                value={value}
                keyboardType={keyboard ? keyboard : 'default'}
                multiline={messageInput ? true : false}
                style={messageInput ? styles.messageInput : styles.input}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.OFFWHITE, 
        borderRadius: 25, 
        marginTop: 20, 
        borderWidth: 1,
        borderColor: Colors.BROWN
    },
    input: {
        paddingLeft: 15,
        fontSize: 18,
        color: Colors.BROWN,
    },
    messageInput: {
        height: 120,
        paddingLeft: 15,
        fontSize: 18,
        textAlignVertical: 'top',
        color: Colors.BROWN,
    }
})

export default Input
