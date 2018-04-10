/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 */

import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import store from './store/store';

interface Props {};
export default class App extends React.Component<object, object> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AddTodo />
          <TodoList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
