import React, { Component } from 'react'

export default class TodosHeader extends Component {
  state = {
    todoName: '',
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.state.todoName}
          onChange={(e) => this.setState({ todoName: e.target.value })}
          onKeyUp={this.addTodos}
        />
      </header>
    )
  }
  addTodos = (e) => {
    // console.log(e.keyCode)
    if (e.keyCode === 13) {
      this.props.handleAdd(this.state.todoName)
      this.setState({
        todoName: '',
      })
    } else {
      return
    }
  }
}
