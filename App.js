import React, { Component } from 'react'

import { Provider } from 'react-redux'

// Store
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/index'
import thunkMiddleware from 'redux-thunk'
const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(rootReducer, compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './navigation/AuthNavigator'
import RootDrawerNavigator from './navigation/RootDrawerNavigator'
//console.disableYellowBox = true;

class App extends Component {
  render () {

    const Stack = createStackNavigator();

    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="Auth"
            headerMode='none'
          >
            <Stack.Screen name="Drawer" component={RootDrawerNavigator} />
            <Stack.Screen name="Auth" component={AuthNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
   }
}

export default App;



