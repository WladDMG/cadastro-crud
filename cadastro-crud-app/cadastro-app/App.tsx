import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './src/screens/AuthScreen';
import UsersScreen from './src/screens/UsersScreen';

export type RootStackParamList = {
  Auth: undefined;
  Users: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthScreen} options={{ title: 'Login / Cadastro' }} />
        <Stack.Screen name="Users" component={UsersScreen} options={{ title: 'Gerenciar Usuários' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}