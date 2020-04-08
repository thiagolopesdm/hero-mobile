import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  Text
} from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Register() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCidade] = useState('');
  const [uf, setUf] = useState('');

  const navigateBack = () => {
    navigation.goBack();
  };

  const handleRegister = async () => {
    const data = { name, email, whatsapp, city, uf };

    try {
      const response = await api.post('ongs', data);

      Alert.alert(
        `Seu ID de acesso ${response.data.id}`,
        'Salve esse ID para conseguir realizar seu login'
      );

      navigateBack();
    } catch (error) {
      Alert.alert('Erro no cadastro, tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.formTitle}>Cadastro</Text>
        <Text style={styles.formSubTitle}>
          Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
          os casos da sua ONG
        </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={name}
            onChangeText={e => setName(e)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={e => setEmail(e)}
          />
          <TextInput
            style={styles.input}
            placeholder="Whatsapp"
            value={whatsapp}
            onChangeText={e => setWhatsapp(e)}
          />
          <TextInput
            style={styles.input}
            placeholder="Cidade"
            value={city}
            onChangeText={e => setCidade(e)}
          />
          <TextInput
            style={styles.input}
            placeholder="Uf"
            value={uf}
            onChangeText={e => setUf(e)}
          />
          <TouchableOpacity style={styles.logonButton} onPress={handleRegister}>
            <Text style={styles.logonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
