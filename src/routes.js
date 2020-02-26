import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Usuarios" 
                component={Main}
                options={{
                    title: "Usuários",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: '#7159c1',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerBackTitleVisible: false,
                  }} />
                <Stack.Screen 
                name="User" 
                component={User}
                options={{
                    title: "Info Usuário",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: '#7159c1',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerBackTitleVisible: false,
                  }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;