import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/main';
import { NavigationContainer } from '@react-navigation/native';
import Product from './pages/product';

const Stack = createStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Main" 
                    component={Main}
                    options={{
                        title: 'Deco Native',
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        headerStyle:{
                            backgroundColor: '#DA552F',
                        }
                    }}
                />
                <Stack.Screen 
                    name='Product' 
                    component={Product}
                    options={({ route }) => ({ 
                        title: route.params.product.title,
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        headerStyle:{
                            backgroundColor: '#DA552F',
                        } 
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


