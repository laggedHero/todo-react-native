import React from 'react';
import {
  View,
  FlatList,
  Text
} from 'react-native';
import { connect, Dispatch } from 'react-redux';
import { toggleTodo, ToggleTodoAction } from '../actions/actions';
import { Todo } from '../store/store';

const TodoView = (props: {
    key: String,
    completed: Boolean,
    text: String,
    onClick: () => void
}) => (
    <View>
      <Text
      style={{
        textDecorationLine: props.completed? 'line-through' : null
      }}
      onPress={props.onClick} >
      {props.text}
      </Text>
    </View>
  );

  const TodoList = (props: {
    todos: Todo[],
    onTodoClick: (id: String) => void
  }) => (
    <View style={{ flex: 1 }}>
      <FlatList
        data={props.todos.map(todo => ({
          key: todo.id,
          completed: todo.completed,
          text: todo.text,
          onClick: () => props.onTodoClick(todo.id)
        }))}
        renderItem={({item}) =>
          <TodoView
            key={item.key}
            completed={item.completed}
            text={item.text}
            onClick={item.onClick}
            />
        } />
    </View>
  );

  const getVisibleTodos = (todos: Todo[], filter: String) => {
      switch (filter) {
          case 'SHOW_COMPLETED':
            return todos.filter((t) => t.completed);
          case 'SHOW_CTIVE':
            return todos.filter((t) => !t.completed);
          default:
            return todos;
      }
  }

  const mapStateToProps = (state: any) => ({
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  });
  const mapDispatchToProps = (
    dispatch: Dispatch<ToggleTodoAction>
  ) => ({
    onTodoClick: (id: String) => {
      dispatch(toggleTodo(id));
    }
  });
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList);