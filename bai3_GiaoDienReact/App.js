import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.imgBackground} source={require('./assets/background1_a.png')} >
        <StatusBar style="auto" />
        <View style={styles.containerTop}>
            {/* <Image
                source={{ uri: './asset/1a_circle.png' }}
                style={styles.imgTop}       /> */}
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
            </View>
            
        </View>
</ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
    // justifyContent: 'center',
     }, 
     imgBackground:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        
    },
    containerTop: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        width: "100%",
        marginTop: 20,
    },
    imgTop: { width: 40, height: 40, color: "red",
    backgroundColor: '#000',
    },
    view_img: {
        position: "absolute",
        width: 142,
        height: 142,
        left: 109,
        top: 69,
        borderColor: '#000',
        borderWidth: 15,
        borderRadius:100,
    },
    containerCenter: {
        flex:1,
        width: "100%",
        alignItems: 'center',
        // backgroundColor: 'green',
    },
    txtTop:{
        textAlign:'center',
        fontSize: 30,
        fontWeight: 'bold',
        width: 200
    },
    txtBottom: {
        textAlign:'center',
        fontWeight: 'bold',
        width: '80%',
        marginTop: 60,
    },
    containerBottom: {
        flex:1,
        width: "100%",
        // backgroundColor: 'yellow',
    },
    containerBTN: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    btn: {
        padding: 10
    }, //background: #E3C000;
    text: {
        marginTop: 10,
        alignItems: 'center',
        fontStyle: 'bold',
        padding: 15,
    },
});
