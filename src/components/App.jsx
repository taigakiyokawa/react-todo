import React from 'react';
import Form from './Form';
import List from './List';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  // Save todo
  handleAdd(e) {
    console.log(e.target.title.value);
    // Prevent redirect
    e.preventDefault();
    // Add data to todo-array from Form
    this.state.todo.push({ title: e.target.title.value }); // Doesn't save yet
    // Update state
    this.setState({ todo: this.state.todo });
    // Reset value
    e.target.title.value = "";
  }

  // Remove todo
  handleRemove(i) {
    this.state.todo.splice(i, 1);
    // Update state
    this.setState({todo: this.state.todo});
  }

  render() {
    return (
      <div className="siimple-box siimple--bg-dark">
        <h1 className="siimple-box-title siimple--color-white">React Todo App</h1>
        <Form handleAdd={ this.handleAdd }/>
        <div className="siimple-rule"></div>
        <List todos={ this.state.todo } handleRemove={ this.handleRemove }/>
      </div>
    );
  }
}