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
  render(){
    return (
      <div className="App">
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;