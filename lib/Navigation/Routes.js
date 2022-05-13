import React, { Component } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from "./BottomNavigation";
import RoutesKey from './routesKey'

const Stack = createNativeStackNavigator()
class StackNav extends Component {
    render() {
        return (
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: false,
                    gestureDirection: 'horizontal',
                }}>
                <Stack.Screen name={RoutesKey.BOTTOMNAVIGATION}
                    component={BottomNavigation}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        )
    }
}


export default Routes = () => {
    return (
        <>
            <StackNav />
        </>
    )
}