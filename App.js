import React, { useEffect, useState } from 'react'
import { Text, View, StatusBar } from 'react-native'
import ContactUs from './src/screens/ContactUs';

const App = () => {

    return (
        <>
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            <ContactUs/>
        </>
    )
}

export default App
