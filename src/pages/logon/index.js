import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, AsyncStorage, Alert, Text, Image } from 'react-native';

import styles from './styles';
import logoImage from '../../assets/logo.png';
import api from '../../services/api';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function LogOn() {
  const navigation = useNavigation();
  const [id, setId] = useState('');

  const navigateToDetail = () => {
    navigation.navigate('Profile');
  };

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  const handleLogin = async () => {
    try {
      const response = await api.post('sessions', { id });
      await AsyncStorage.setItem('ongName', response.data.name);
      await AsyncStorage.setItem('ongId', id);
      navigateToDetail();
    } catch (error) {
      Alert.alert(
        'Falha no login',
        'Algo deu errado, tente novamente mais tarde'
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={logoImage} />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Sua ID"
          value={id}
          onChangeText={e => setId(e)}
        />
        <TouchableOpacity style={styles.logonButton} onPress={handleLogin}>
          <Text style={styles.logonText}>Entrar</Text>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 5
          }}
        >
          <Text style={{ opacity: 0.5, fontWeight: 'bold' }}>ou</Text>
        </View>
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={navigateToRegister}
        >
          <Text style={styles.createAccountText}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
