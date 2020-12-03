import './App.css';
import React from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { List } from './components/List'
import {TodoEditor} from './components/TodoEditor'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      isEdit: false
    }
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.handleDelTodo = this.handleDelTodo.bind(this)
    this.save = this.save.bind(this)
  }

  handleAddTodo(e) {
    if (e.key == "Enter") {
      let todos = this.state.todos
      todos.push({
        input: e.target.value,
      })
      this.setState({
        todos: todos,
      })
      console.log(this.state)
    }
  }

  handleEditTodo(index) {
    this.setState({ 
      isEdit: true, 
      selectedindx: index })
  }

  save(index){
    this.setState({ 
      isEdit: false, 
      
    })
  }

  handleDelTodo(index) {
    let todos = this.state.todos
    todos.splice(index, 1)
    this.setState({
      todos: todos,
    })
    console.log(this.state)
  }

  render() {
    if(this.state.isEdit == true){
      return (
        <TodoEditor {...this.state.todos[this.state.selectedindx]} indx={this.state.selectedindx} onClickSave={()=>this.save()} onChangeEdit={this.changeEdit} />
      )
    }
    else {
      return (
        <div className="App">
          <Header />
          <Form onKeyDown={this.handleAddTodo} />
          <div className="todos">
            {this.state.todos.map((todo, ind) =>
              (<List key={ind} {...todo} onClickEdit={() => this.handleEditTodo(ind)} onClickDel={() => this.handleDelTodo(ind)} />)
            )}
          </div>
        </div>
      );
    }
  }
}

export default App;