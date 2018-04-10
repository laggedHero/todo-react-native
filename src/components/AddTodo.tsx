import React from 'react';
import {
  View,
  TextInput,
  Button
} from 'react-native';
import { connect, Dispatch } from 'react-redux';
import { AddTodoAction, addTodo } from '../actions/actions';

interface AddTodoProps {
    onSubmit: (text: String) => void
}

interface AddTodoState {
    taskName: String
}

const mapDispatchToProps = (dispatch: Dispatch<AddTodoAction>): AddTodoProps => ({
        onSubmit: (text: String) => dispatch(addTodo(text))
});

class AddTodo extends React.Component<AddTodoProps, AddTodoState> {

    constructor(props: any) {
        super(props);

        this.state = {
            taskName: ''
        }
    }

    render() {
        const { onSubmit } = this.props;
        return (
            <View style={{
                flexDirection: 'row'
            }} >
                <TextInput
                style={{
                    flex: 1,
                    height: 40
                    }}
                placeholder="New todo"
                onChangeText={(text) => this.setState({taskName: text})}/>
                <View>
                    <Button
                        onPress={() => {
                            onSubmit(this.state.taskName);
                        }}
                        title="Add"/>
                </View>
            </View>
        );
    }
}

export default connect<object, AddTodoProps, void>(
    null, mapDispatchToProps
)(AddTodo);