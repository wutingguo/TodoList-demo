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
    type: 'All',
  }
  flagFn = (id) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            flag: !item.flag,
          }
        } else {
          return item
        }
      }),
    })
  }
  handleDel = (id) => {
    // console.log(id, 6666)
    // console.log(465)
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    })
    // console.log(77777)
  }
  editList = (id, name) => {
    // console.log(id, name, '8-----')
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            name,
          }
        } else {
          return item
        }
      }),
    })
  }
  render() {
    return (
      <>
        <section className="todoapp">
          <TodosHeader handleAdd={this.handleAdd}></TodosHeader>
          <TodosMain
            list={this.state.list}
            flagFn={this.flagFn}
            handleDel={this.handleDel}
            editList={this.editList}
            type={this.state.type}
          ></TodosMain>
          <TodosFooter
            list={this.state.list}
            clearTrueFn={this.clearTrueFn}
            typeFn={this.typeFn}
          ></TodosFooter>
        </section>
      </>
    )
  }
  handleAdd = (name) => {
    this.setState({
      list: [
        {
          id: +new Date(),
          name,
          flag: false,
        },
        ...this.state.list,
      ],
    })
  }
  clearTrueFn = () => {
    this.setState({
      list: this.state.list.filter((item) => !item.flag),
    })
  }
  typeFn = (type) => {
    this.setState({
      type,
    })
  }
}
reactDom.render(<Father></Father>, document.querySelector('#root'))
