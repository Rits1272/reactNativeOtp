import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Otp from './src/screens/Otp';
import Account from './src/screens/Account';
import SplashScreen from './src/screens/Splash';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();
const TabBottom = createBottomTabNavigator();
const TabTop = createMaterialTopTabNavigator();



const TopTabs = () => {
  return (
    <TabTop.Navigator
    tabBarOptions={{
      activeTintColor: '#33E6F6',
      inactiveTintColor: 'lightgray',
      activeBackgroundColor: '#232B2B',
      inactiveBackgroundColor: '#232B2B',
      indicatorStyle:{backgroundColor: '#33E6F6'},
          style: {
                backgroundColor: '#232B2B',
          }
   }}
    >
      <TabTop.Screen name="Live" component={Home} />
      <TabTop.Screen name="Upcoming" component={Home} />
    </TabTop.Navigator>
  )
}

const BottomTabs = () => {
  return (
    <TabBottom.Navigator
    tabBarOptions={{
      activeTintColor: '#33E6F6',
      inactiveTintColor: 'lightgray',
      activeBackgroundColor: '#232B2B',
      inactiveBackgroundColor: '#232B2B',
      indicatorStyle:{backgroundColor: '#33E6F6'},
      style: {
            backgroundColor: '#232B2B',
            paddingBottom: 5,
      }
   }}
    >
      <TabBottom.Screen name="Home" component={TopTabs} 
       options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}/>
      <TabBottom.Screen name="Tournament" component={Home}
             options={{
              tabBarLabel: 'Tournament',
              tabBarIcon: ({color, size}) => (
                <Icon name="trophy" color={color} size={size} />
              ),
            }}
       />
      <TabBottom.Screen name="Leaderboard" component={Home} 
             options={{
              tabBarLabel: 'Leaderboard',
              tabBarIcon: ({color, size}) => (
                <Icon name="cellular" color={color} size={size} />
              ),
            }}
      />
      <TabBottom.Screen name="Account" component={Home} 
             options={{
              tabBarLabel: 'Account',
              tabBarIcon: ({color, size}) => (
                <Icon name="person" color={color} size={size} />
              ),
            }}
      />
    </TabBottom.Navigator>
  )
}

const MainStack = () => {
  return(
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#232B2B',
          elevation: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen options={{headerShown: false}} name="Splash" component={SplashScreen}/>
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
      <Stack.Screen options={{headerShown: false}} name="Otp" component={Otp}/>
      <Stack.Screen options={{headerShown: false}} name="Account" component={Account}/>
      <Stack.Screen name="Home" component={BottomTabs} />
  </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}