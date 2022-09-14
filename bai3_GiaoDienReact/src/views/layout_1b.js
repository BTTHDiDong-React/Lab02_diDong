import { ImageBackground, StyleSheet, StatusBar, Text, View, Image, Button } from 'react-native';
import React from 'react';

// import styles from './../styles/style1b';


const Layout1b = () => {
  return (
    <ImageBackground style={styles.imgBackground} source={require('./../images/1b_background.png')} > 
    <StatusBar style="auto" />
        <View style={[styles.flex_1]}>
            {/* <Text style={styles.ct_title} >FORGET PASSWORD</Text>  */}
            
        </View> 
        <View style={[styles.containerTop , styles.flex_2] }>
            <Image
                style={styles.ct_img} 
                source={require('./../images/1b_lock.png')} />
            <Text style={styles.ct_title} >FORGET PASSWORD</Text> 

        </View> 
        <View style={[styles.containerCenter, styles.flex_3] }>
            <Text style={styles.cc_title} >Provide your account’s email for which you want to reset your password</Text> 
        </View>


        <View style={[styles.containerBottom, styles.flex_2 ]}>
            
        </View> 
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
    imgBackground:{

    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
        fontWeight: 'bold'
    },
    flex_1: {
        flex: 1,
        // height: '100%',
    },
    flex_2: {
        flex: 2,
    },
    flex_3: {
        flex: 3,
    },
    containerTop: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ct_img: {
        // padding: 50,
    },
    ct_title: {
        width: 120,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 25,
    },
    
    containerCenter: {
        // flex:1,
        // backgroundColor: 'green',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    cc_title: {
        width: '80%',
        textAlign: 'center',
        margin: 20,
    },
    containerBottom: {
        backgroundColor: 'yellow',
        // flex:1,
    },
       
    
});

export default Layout1b ;