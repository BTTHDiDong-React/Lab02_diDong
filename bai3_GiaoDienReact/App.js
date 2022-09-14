import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RootComponent from './src/views/index';
import Layout1b from './src/views/layout_1b';
import Layout1c from './src/views/layout_1c';

const Stack = createNativeStackNavigator();

export default function App() {


    return (
    <View style={styles.container}>
        {/* <RootComponent /> */}
        {/* <Layout1b /> */}
        <Layout1c />


        {/* <NavigationContainer>
            <Stack.Navigator initialRouteName="RootComponent">
                <Stack.Screen name="RootComponent" component={RootComponent} />
                <Stack.Screen name="Layout1b" component={Layout1b} />
            </Stack.Navigator>
        </NavigationContainer> */}

        </View>
  );
}
const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    
});
