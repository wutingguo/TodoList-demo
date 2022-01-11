import React, { Component } from 'react'
import reactDom from 'react-dom'
import TodosFooter from './TodosFooter'
import TodosHeader from './TodosHeader'
import TodosMain from './TodosMain'
import './css/base.css'
import './css/index.css'

export default class Father extends Component {
  state = {
    list: [
      { id: 1, name: '吃饭', flag: false },
      { id: 2, name: '睡觉', flag: false },
      { id: 3, name: '打豆豆', flag: true },
    ],
  }
  render() {
    return (
      <>
        <section className="todoapp">
          <TodosHeader></TodosHeader>
          <TodosMain list={this.state.list}></TodosMain>
          <TodosFooter></TodosFooter>
        </section>
      </>
    )
  }
}
reactDom.render(<Father></Father>, document.querySelector('#root'))
