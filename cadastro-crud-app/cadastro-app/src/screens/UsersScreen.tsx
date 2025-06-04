import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TextInput, Button, Alert } from 'react-native';
import api from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = { _id: string; firstName: string; lastName: string; email: string; };

export default function UsersScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchUsers = async () => {
    const { data } = await api.get<User[]>('/users');
    setUsers(data);
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleSave = async () => {
    try {
      if (editingId) {
        await api.patch(`/users/${editingId}`, { firstName, lastName, email });
        setEditingId(null);
      } else {
        await api.post('/users', { firstName, lastName, email, password: '123456' });
      }
      setFirstName(''); setLastName(''); setEmail('');
      fetchUsers();
    } catch (e: any) {
      Alert.alert('Erro', e.response?.data?.message || e.message);
    }
  };

  const handleEdit = (u: User) => {
    setEditingId(u._id);
    setFirstName(u.firstName);
    setLastName(u.lastName);
    setEmail(u.email);
  };

  const handleDelete = async (id: string) => {
    await api.delete(`/users/${id}`);
    fetchUsers();
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    // navegar de volta
  };

  return (
    <View style={{ flex:1, padding: 16 }}>
      <TextInput placeholder="Nome" value={firstName} onChangeText={setFirstName} style={{ borderBottomWidth:1, marginBottom:8 }} />
      <TextInput placeholder="Sobrenome" value={lastName} onChangeText={setLastName} style={{ borderBottomWidth:1, marginBottom:8 }} />
      <TextInput placeholder="E-mail" value={email} onChangeText={setEmail} style={{ borderBottomWidth:1, marginBottom:16 }} />
      <Button title={editingId ? 'Atualizar' : 'Adicionar'} onPress={handleSave} />
      <View style={{ flex:1, marginTop:16 }}>
        <FlatList
          data={users}
          keyExtractor={u => u._id}
          renderItem={({ item }) => (
            <View style={{ padding:8, borderBottomWidth:1 }}>
              <Text>{item.firstName} {item.lastName}</Text>
              <Text>{item.email}</Text>
              <View style={{ flexDirection:'row', marginTop:4 }}>
                <Button title="Editar" onPress={() => handleEdit(item)} />
                <View style={{ width:8 }}/>
                <Button title="Deletar" onPress={() => handleDelete(item._id)} />
              </View>
            </View>
          )}
        />
      </View>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
