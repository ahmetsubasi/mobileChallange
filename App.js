import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as SecureStore from 'expo-secure-store';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import CreateUserScreen from './screens/CreateUser';
import UserDetailsScreen from './screens/UserDetails';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const loginStatus = await SecureStore.getItemAsync('isLoggedIn');
      setIsLoggedIn(loginStatus === 'true');
    } catch (error) {
      console.log('Error retrieving login state:', error);
    }
  };

  const handleLogin = async () => {
    try {
     const response = fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: "kminchelle",
          password: "0lelplR"
        })
      })
      .then(res => res.json())

      setIsLoggedIn(true);

      await SecureStore.setItemAsync('isLoggedIn', 'true');

      navigation.navigate('Home');
    } catch (error) {

      setIsLoggedIn(true);
      console.log('Error during login:', error);
    }
  };

    const handleLogout = async () => {
    try {
      setIsLoggedIn(false);
      await SecureStore.setItemAsync('isLoggedIn', 'false');
      navigation.navigate('Home');
    } catch (error) {
      console.log('Error during login:', error);
    }
  };

  const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} initialParams={{ handleLogout }} options={{ headerShown: false }} />
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
    </Stack.Navigator>
  );
};

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <>
        <Tab.Navigator
         screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            console.log(route);
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} style={{color:'blue' ,fontSize: 24}} />
         
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'black',
        })}
        >
          <Tab.Screen name="Home" 
          component={HomeStack} 
          options={{ headerShown: false }}
          />
          <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ headerShown: false }} />
        </Tab.Navigator>
        </>
      ) : (
      <Stack.Navigator>
          <Stack.Screen
            name="Sign"
            component={LoginScreen}
            options={{ headerShown: false }}
            initialParams={{ handleLogin }}
          />
          <Stack.Screen
            name="CreateUser"
            component={CreateUserScreen}
            options={{
            title: 'New User',
            headerStyle: {
              backgroundColor: '#66708b',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
            initialParams={{ handleLogin }}
          />
      </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;






