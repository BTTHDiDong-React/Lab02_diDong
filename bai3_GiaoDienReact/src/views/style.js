import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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

export default styles;


