import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  AsyncStorage,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Alert
} from 'react-native';

import api from '../../services/api';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Profile() {
  const navigation = useNavigation();

  const [ongName, setOngName] = useState('');
  const [ongId, setOngId] = useState('');
  const [incidents, setIncidents] = useState([]);

  async function retriveData() {
    try {
      const name = await AsyncStorage.getItem('ongName');
      const id = await AsyncStorage.getItem('ongId');

      if (name !== null && id !== null) {
        setOngName(name);
        setOngId(id);
      }
    } catch (error) {}
  }

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      alert(`Erro ao deletar o caso, tente novamente`);
    }
  }

  useEffect(() => {
    retriveData();
  }, []);

  useEffect(() => {
    api
      .get('profile', {
        headers: {
          Authorization: ongId
        }
      })
      .then(response => setIncidents(response.data));
  }, [ongId, incidents]);

  function handleLogout() {
    AsyncStorage.clear();
    navigation.navigate('Logon');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Text style={{ marginRight: 8 }}>Bem vinda, {ongName}</Text>
          <TouchableOpacity>
            <Feather
              name="power"
              size={18}
              color="#e02041"
              onPress={handleLogout}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 40
        }}
      >
        <Text style={{ fontSize: 20, color: '#41414d' }}>
          Casos Cadastrados
        </Text>
        <TouchableOpacity
          style={styles.addNew}
          onPress={() => navigation.navigate('NewIncident')}
        >
          <Text style={styles.addNewText}>Adicionar Novo</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={incidents}
        style={styles.incidentList}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={true}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>Caso:</Text>
            <Text style={styles.incidentvalue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>Descrição:</Text>
            <Text style={styles.incidentvalue}>{incident.description}</Text>

            <Text style={styles.incidentProperty}>Valor:</Text>
            <Text style={styles.incidentvalue}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(incident.value)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => handleDeleteIncident(incident.id)}
            >
              <Text style={styles.detailsButtonText}>Excluir caso</Text>
              <Feather name="trash" size={17} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
