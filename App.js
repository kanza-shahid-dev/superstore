import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import StackNavigation from './src/navigations/StackNavigation';
import Intro from './src/screens/Intro';
import store from './src/redux/store'

const App = () => {
  const MyTheme = {
    colors: {
      primary: 'green',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };
  return (
    <Provider store={store}>
    <NavigationContainer theme={MyTheme}>
      <StackNavigation/>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
