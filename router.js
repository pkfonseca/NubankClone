import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NubankPg from './src/NubankPg';

class Router extends Component{
    render(){
        return(
            <NavigationContainer>
                <StackRouter/>
            </NavigationContainer>
        )
    }
}

class StackRouter extends Component{
    Stack = createStackNavigator()

    render(){
        return(
            
            <this.Stack.Navigator initialRouteName="Nubank">
                <this.Stack.Screen
                name="Nubank"
                component={NubankPg}
                options={{headerShown: false}}/>
            </this.Stack.Navigator>
        )
    }
}

export default Router;
