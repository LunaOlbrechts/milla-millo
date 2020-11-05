import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button, Alert,TextInput } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from "expo-constants";
const { manifest } = Constants


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

const postLoginData = (value) => {
        var userdata = {'name': value}

        console.log(userdata);
            
        fetch("http://192.168.0.159:8000/login", {
            method: "POST",
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
                }),
            body:  userdata
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json.status);
        })
        .catch((error) => {
            console.error(error);
        });
   
};

function LoginScreen({ navigation }) {
        const [value, onChangeText] = React.useState('name');
    return (
       <SafeAreaView style={styles.container}>
           <Text>Inloggen</Text>

           <TextInput
                style={{ height: 40, width:100, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />

            <Button
              title="Login"
              onPress={() => postLoginData(value)}
            />        
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