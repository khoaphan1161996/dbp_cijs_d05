import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Weather} from './Components/Header'
import {Searchbar} from './Components/Searchbar'
import {Result} from './Components/Result'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return (
      <div className="App">
        <Weather></Weather>
        <Searchbar></Searchbar>
        <Result></Result>
      </div>
    );
  }
  
}

export default App;
