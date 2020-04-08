import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import styles from './styles';
import logoImage from '../../assets/logo.png';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  AsyncStorage
} from 'react-native';

export default function NewIncident() {
  const navigation = useNavigation();

  const [ongId, setOngId] = useState('');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const navigateBack = () => {
    navigation.goBack();
  };

  async function retriveData() {
    try {
      const id = await AsyncStorage.getItem('ongId');

      if (id !== null) {
        setOngId(id);
      }
    } catch (error) {}
  }

  async function handleNewIncident() {
    const data = { title, description, value };
    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      });
      navigation.navigate('Profile');
    } catch (error) {
      Alert.alert('Erro ao salvar o caso, tente novamente.');
    }
  }
  useEffect(() => {
    retriveData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImage} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Cadastro</Text>
        <Text style={styles.subTitle}>
          Descreva o caso detalhadamente para encontrar um herói para resolver
          isso.
        </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do caso"
            value={title}
            onChangeText={e => setTitle(e)}
          />
          <TextInput
            style={styles.input}
            placeholder="Descrição do caso"
            value={description}
            onChangeText={e => setDescription(e)}
          />
          <TextInput
            style={styles.input}
            placeholder="Valor do caso"
            value={value}
            onChangeText={e => setValue(e)}
          />
          <TouchableOpacity
            style={styles.logonButton}
            onPress={handleNewIncident}
          >
            <Text style={styles.logonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
