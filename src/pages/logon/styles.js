import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    justifyContent: 'center'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 200
  },
  input: {
    height: 60,
    fontSize: 18,
    borderColor: '#dcdce6',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 24
  },
  logonButton: {
    height: 60,
    backgroundColor: '#e02041',
    borderRadius: 8,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logonText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold'
  },
  createAccountButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  createAccountText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e02041'
  }
});
