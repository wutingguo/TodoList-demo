import React, { Component } from 'react'

export default class TodosMain extends Component {
  render() {
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.list.map((item) => (
            <li className="completed">
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Taste JavaScript</label>
                <button className="destroy"></button>
              </div>
              <input className="edit" value="Create a TodoMVC template" />
            </li>
          ))}
        </ul>
      </section>
    )
  }
}
