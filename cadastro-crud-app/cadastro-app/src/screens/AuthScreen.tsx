import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import api from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Auth'>;

export default function AuthScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await api.post('/auth/register', { email, password, firstName: 'FN', lastName: 'LN' });
      Alert.alert('Sucesso', 'Usuário criado! Agora faça login.');
    } catch (e: any) {
      Alert.alert('Erro', e.response?.data?.message || e.message);
    }
  };

  const handleLogin = async () => {
    try {
      const { data } = await api.post('/auth/login', { email, password });
      await AsyncStorage.setItem('token', data.access_token);
      navigation.replace('Users');
    } catch (e: any) {
      Alert.alert('Erro', e.response?.data?.message || e.message);
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput placeholder="E-mail" value={email} onChangeText={setEmail} autoCapitalize="none" style={{ marginBottom: 8, borderBottomWidth: 1 }} />
      <TextInput placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry style={{ marginBottom: 16, borderBottomWidth: 1 }} />
      <Button title="Registrar" onPress={handleRegister} />
      <View style={{ height: 8 }} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
