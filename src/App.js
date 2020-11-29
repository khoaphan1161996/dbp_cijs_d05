import './App.css';
import React from 'react'
import {Header} from './components/Header'
import {Form} from './components/Form'
import {List} from './components/List'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchText: "",
      todos : []
    }
    this.search = this.search.bind(this)
    this.handleTodo = this.handleTodo.bind(this)
  }
  search(e){
    this.setState({
      searchText: e.target.value
    })
  }
  handleTodo(){
    let todos = this.state.todos
    todos.push({
      input: this.state.searchText,
    })
    this.setState({
      todos: todos
    })
    console.log(this.state.todos)
  }
  render(){
    return (
      <div className="App">
        <Header />
        <Form onChange={this.search} onClick={this.handleTodo} />
        <div>
            {this.state.todos.map((todo,ind)=>{
              return (
                <List key={ind} {...todo}/>
              )
            })
            }
        </div>
      </div>
    );
  }
}

export default App;