import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { Forecast } from "./src/screens/Forecast/index";
import { CitySelection } from './src/screens/CitySelection/index'
import { Weather } from './src/screens/Weather/index'
import { Settings } from "./src/screens/Settings/index";
import { Login } from "./src/screens/Login/index";
import { Navigation } from "./src/components/Navigation";


const App = () => {
    const Stack = createStackNavigator();

    // return <Forecast/>
    // return <CitySelection/>
    // return <Weather/>
    // return <Settings/>
    // return  <Login/>
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Forecast" component={Forecast} />
            <Stack.Screen name="CitySelection" component={CitySelection} />
            <Stack.Screen name="Weather" component={Weather} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Navigation" component={Navigation} />
        </Stack.Navigator>
    </NavigationContainer>

};


export default App;
