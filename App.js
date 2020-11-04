import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function WelcomeScreen({ navigation }) {
  return (
     <SafeAreaView style={styles.container}>
         <Text>Milla en Millo's avonturen</Text>
         <Button
              title="Login"
              onPress={() =>
                  navigation.navigate('Login')
              }
          />  
          <Button
              title="Register"
              onPress={() =>
                  navigation.navigate('Register')
              }
          />          
     </SafeAreaView> 
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Welcome' }}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }}/>
      </Stack.Navigator>
    </NavigationContainer>
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


export default App;

