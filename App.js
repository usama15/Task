import React from 'react'
import { NativeBaseProvider, Box } from "native-base";
import theme from './lib/theme/theme';
import Routes from './lib/Navigation/Routes';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import {Store} from './lib/Store/Store'
const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Provider store={Store}>
        <Routes />
        </Provider>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App