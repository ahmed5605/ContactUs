import React, { useEffect, useState } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Colors from '../style/Colors';


const ErrorToast = (props) => {

    const { value, } = props;

    return (
        <View style={styles.container} >
            <Image style={styles.image} source={require('../../assets/error.png')} />
            <Text style={styles.text} >{value}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 5,
        paddingRight: 10,
        paddingLeft: 10,
        marginBottom: 10,
        backgroundColor: Colors.GREY,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        color: Colors.BROWN,
    },
    image: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginRight: 10
    }
})

export default ErrorToast
