import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  content: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowRadius: 100,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 40,
    padding: 40
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  },
  subTitle: {
    fontSize: 14,
    color: '#737380',
    lineHeight: 32
  },
  form: {
    marginTop: 15
  },
  input: {
    height: 40,
    fontSize: 18,
    borderColor: '#dcdce6',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 24,
    marginTop: 8
  },
  logonButton: {
    height: 40,
    backgroundColor: '#e02041',
    borderRadius: 8,
    marginTop: 22,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  }
});
