import React, { useEffect, useState } from 'react'
import { Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../style/Colors';

export const width = Dimensions.get('window').width;

const ContactUsButton = (props) => {

    const { title, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={styles.container} >
            <Text style={styles.input} >{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red', 
        width: width-40,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.BROWN, 
        borderRadius: 25,
    },
    input: {
        fontSize: 18,
        color: Colors.OFFWHITE,
    }
})

export default ContactUsButton
