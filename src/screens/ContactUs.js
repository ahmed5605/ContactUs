import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'

import email from 'react-native-email'

import Colors from '../style/Colors'
import Input from '../components/Input'
import ErrorToast from '../components/ErrorToast';
import ContactUsButton from '../components/ContactUsButton';



const width = Dimensions.get('window').width;

const ContactUs = () => {

    const [userName, setUserName] = useState('')
    const [userNumber, setUserNumber] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorMsg, setErrorMsg] = useState('')


    const sendEmail = () => {
        console.log("send email");

        if(userName){
            if(userNumber){
                if(userEmail){
                    if(message){
                        var messageBody = message + "\n" + "\n" + "From"  + "\n" + userName + "\n" + userEmail + "\n" + userNumber

                        const to = ['info@redpositive.in']
                        email(to, {
                            subject: 'Message to RedPositive',
                            body: messageBody
                        }).catch(console.error)
                    }else{
                        console.log("Enter the Message!");
                        setErrorMsg('Enter the Message!')
                    }
                }else{
                    console.log("Enter the Email!");
                    setErrorMsg('Enter the Email!')
                }
            }else{
                console.log("Enter the Number!");
                setErrorMsg('Enter the Number!')
            }
        }else{
            console.log("Enter the Name!");
            setErrorMsg('Enter the Name!')
        }  
    }

    return (
        <View style={styles.mainContainer} >
            <View>
                <View style={{alignItems: 'center'}} >
                    <Text style={styles.contactUs} >Contact Us</Text>
                </View>

                <View>
                    <Input
                        value={userName}
                        placeholder="Full Name"
                        onChange={(text) => {setUserName(text); setErrorMsg('');}}
                    />

                    <Input
                        value={userNumber}
                        keyboard="numeric"
                        placeholder="Mobile Number"
                        onChange={(text) => {setUserNumber(text); setErrorMsg('');}}
                    />

                    <Input
                        value={userEmail}
                        placeholder="Email"
                        onChange={(text) => {setUserEmail(text); setErrorMsg('');}}
                    />

                    <Input
                        value={message}
                        placeholder="Message"
                        messageInput={true}
                        onChange={(text) => {setMessage(text); setErrorMsg('');}}
                    />
                </View>
                
            </View>

            <View style={{position: 'absolute', width: width, alignItems: 'center', bottom: 20, }} >
                {errorMsg ? <ErrorToast value={errorMsg} /> : null }
                <ContactUsButton title="Contact Us" onPress={sendEmail} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.BACKGROUND
    },
    contactUs: {
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.BROWN
    }
})

export default ContactUs
