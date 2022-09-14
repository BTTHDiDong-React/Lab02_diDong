import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    imgBackground:{
        flex:1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
            
        },
        containerTop: {
            
            alignItems:'center',
            justifyContent: 'center',
            width: "100%",
            marginTop: 20,
            backgroundColor: 'red',
        },
        containerCenter: {
            flex:1,
            width: "100%",
            alignItems: 'center',
            backgroundColor: 'green',
        },
        containerBottom: {
            flex:1,
            width: "100%",
            backgroundColor: 'yellow',
        },
       
    
});

export default styles;


