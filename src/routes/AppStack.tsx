import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';

const Stack = createStackNavigator();

export default function AppStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Landing"  component={Landing} />
                <Stack.Screen name="GiveClasses"  component={GiveClasses} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}