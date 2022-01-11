import React, { Component } from 'react'
import classNames from 'classnames'

export default class TodosMain extends Component {
  state = {
    editId: '',
    newName: '',
  }
  // 处理修改框的显示与否
  handleEdit = (id, newName) => {
    this.setState({
      editId: id,
      newName,
    })
  }
  // 修改选中状态
  handleFlag = (id) => {
    this.props.flagFn(id)
  }
  // 删除列表
  delList = (id) => {
    // console.log(1313)
    this.props.handleDel(id)
  }
  changList = (id, e) => {
    // console.log(id, e.target.value, 89898)
    this.setState({
      newName: e.target.value,
    })
  }
  editFn = (id, e) => {
    // console.log(e.code, 7978979)
    if (e.code === 'Escape') {
      this.setState({
        editId: '',
      })
    } else if (e.code === 'Enter') {
      this.props.editList(id, this.state.newName)
      this.setState({
        editId: '',
        newName: '',
      })
    } else {
      return
    }
  }
  render() {
    let newList = []
    if (this.props.type === 'All') {
      newList = this.props.list
    } else if (this.props.type === 'Active') {
      newList = this.props.list.filter((item) => !item.flag)
    } else if (this.props.type === 'Completed') {
      newList = this.props.list.filter((item) => item.flag)
    }

    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {newList.map((item) => (
            <li
              className={classNames({
                completed: item.flag,
                editing: this.state.editId === item.id,
              })}
              key={item.id}
            >
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={item.flag}
                  onChange={() => this.handleFlag(item.id)}
                />
                <label
                  onDoubleClick={this.handleEdit.bind(this, item.id, item.name)}
                >
                  {item.name}
                </label>
                <button
                  className="destroy"
                  onClick={this.delList.bind(this, item.id)}
                ></button>
              </div>
              <input
                className="edit"
                onChange={this.changList.bind(this, item.id)}
                onKeyUp={(event) => this.editFn(item.id, event)}
                value={this.state.newName}
              />
            </li>
          ))}
        </ul>
      </section>
    )
  }
}
