import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="TeacherList" component={TeacherList} />
            <Tab.Screen name="Favorites" component={Favorites} />
        </Tab.Navigator>
    );
}