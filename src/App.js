import './App.css';
import React from 'react'
import {Header} from './components/Header'
import {Form} from './components/Form'
import {List} from './components/List'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todos : []
    }
  }
  search(e){
    return e.target.value
  }
  handleTodo(){
    this.search()
  }
  render(){
    return (
      <div className="App">
        <Header />
        <Form onChange={this.search} />
      </div>
    );
  }
}

export default App;