import './App.css';
import React from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { List } from './components/List'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: "",
      todos: []
    }
    this.search = this.search.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.handelDelTodo = this.handelDelTodo.bind(this)
  }

  search(e) {
    this.setState({
      searchText: e.target.value
    })
  }

  handleAddTodo() {
    let todos = this.state.todos
    todos.push({
      input: this.state.searchText,
    })
    this.setState({
      todos: todos
    })
    console.log(this.state.todos)
  }

  handelDelTodo(index) {
    let todos = this.state.todos
    todos.splice(index, 1)
    this.setState({
      todos: todos
    })
  }

  // handelEditTodo(index){
  //   let todos = this.state.todos

  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Form onChange={this.search} onClick={this.handleAddTodo} />
        <div className="todos">
          {this.state.todos.map((todo, ind) =>
            (<List key={ind} {...todo} onClickDel={()=>this.handelDelTodo(ind)} />)
          )}
        </div>
      </div>
    );
  }
}

export default App;