import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Detail from './pages/detail';
import Incidents from './pages/incidents';
import LogOn from './pages/logon';
import Register from './pages/register';
import Profile from './pages/profile';
import NewIncident from './pages/newIncident';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Logon" component={LogOn} />
        <AppStack.Screen name="Register" component={Register} />
        <AppStack.Screen name="Profile" component={Profile} />
        <AppStack.Screen name="NewIncident" component={NewIncident} />
        <AppStack.Screen name="Incidents" component={Incidents} />
        <AppStack.Screen name="Detail" component={Detail} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
