import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ViewProduct from "../packages/ViewProduct/ViewProduct";
import AddtoCart from "../packages/AddToCart/AddtoCart";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
const BottomNavigation = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator>
            <Tab.Screen name={'ViewProduct'}
                component={ViewProduct}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons size={size} name='home-outline' color={color} />
                    )
                }}
            />
            <Tab.Screen name={'AddToCart'}
                component={AddtoCart}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather size={size} name='shopping-cart' color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigation