import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import cards from './pantallas/cards';
import information from './pantallas/information';

const Tab = createBottomTabNavigator();

function Mytabs() {
    return (
        <Tab.Navigator
            initialRouteName='cards'
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'purple',
            }}>
            <Tab.Screen
                name="cards"
                component={cards}
                options={{
                    tabBarLabel: 'Equipo',
                }}
            />
            <Tab.Screen
                name="information"
                component={information}
                options={{
                    tabBarLabel: 'Comida',
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Mytabs />
        </NavigationContainer>
    )
}


