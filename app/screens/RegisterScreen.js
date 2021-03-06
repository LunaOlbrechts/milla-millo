import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomeScreen} options={{ title: 'Login' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function LoginScreen({ navigation }) {
    return (
       <SafeAreaView style={styles.container}>
           <Text>Registreren</Text>
       </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    loginBtn:{
        width: 100,
        height: 100,
        backgroundColor: 'black',
    },
});

export default LoginScreen;