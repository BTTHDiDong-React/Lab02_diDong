import { ImageBackground, StyleSheet, StatusBar, Text, View, Image, Button } from 'react-native';
import React from 'react';

import styles from './style';

const RootComponent = () => {
  return (
        <ImageBackground style={styles.imgBackground} source={require('./../images/1a_background.png')} > 
        <StatusBar style="auto" />
        <View style={styles.containerTop}>
                <View style={styles.view_img}>
                </View>
        </View>
        <View style={styles.containerCenter}>
            <Text style={styles.txtTop}>GROW YOUR BUSINESS</Text>
            <Text style={styles.txtBottom}>We will help you to grow your business using
                online server</Text>
        </View>
        <View style={styles.containerBottom}>
            <View style = {styles.containerBTN} >
                <Button style = {styles.btn} title='LOGIN'  color={'#E3C000'} />
                <Button style = {styles.btn} title='SIGN UP' color={'#E3C000'} />
            </View>
            <View style = {styles.text} >
                <Text>HOW WE WORK? </Text> 
                <Button title='1-b' />
            </View>
            
        </View>
    </ImageBackground>
    
  )
}

export default RootComponent ;