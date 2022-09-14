import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    imgBackground:{

        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
            // fontWeight: 'bold'
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
    
        ccEmail: {
            flexDirection: 'row',
            width: 280,
            backgroundColor: '#C4C4C4',
            marginTop: 30,
        },
        txtEmail:
        {
            padding: 5,
            fontSize: 16,
            paddingHorizontal: 10,
        },
        ccNext: {
            paddingTop: 40,
        },
        btnNext: {
            width: 280,
            backgroundColor: '#E3C000',
            padding: 10,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 16,
        },
        containerBottom: {
            // backgroundColor: 'yellow',
            // flex:1,
        },
           
});

export default styles;


