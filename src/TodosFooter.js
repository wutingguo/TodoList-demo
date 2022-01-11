import React, { Component } from 'react'

export default class TodosFooter extends Component {
  render() {
    // let newList = this.props.list
    return (
      <>
        {this.props.list.length > 0 && (
          <footer className="footer">
            <span className="todo-count">
              <strong>{this.props.list.length}</strong> item left
            </span>
            <ul className="filters">
              <li>
                <a
                  className="selected"
                  href="#/"
                  onClick={() => this.allFn('All')}
                >
                  All
                </a>
              </li>
              <li>
                <a href="#/active" onClick={() => this.allFn('Active')}>
                  Active
                </a>
              </li>
              <li>
                <a href="#/completed" onClick={() => this.allFn('Completed')}>
                  Completed
                </a>
              </li>
            </ul>
            {this.props.list.some((item) => item.flag) && (
              <button className="clear-completed" onClick={this.clearTrue}>
                清楚已完成
              </button>
            )}
          </footer>
        )}
      </>
    )
  }
  clearTrue = () => {
    this.props.clearTrueFn()
  }
  allFn = (type) => {
    this.props.typeFn(type)
  }
}
