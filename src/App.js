import './App.css';
import React from 'react'
//import components
import { Header } from './components/Header'
import { Form } from './components/Form'
import { List } from './components/List'
import { TodoEditor } from './components/TodoEditor'
import { Sign } from './components/Sign'
import {SignUp} from './components/SignUp'
import {SignIn} from './components/SignIn'
import {LogOut} from './components/LogOut'
//import Firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from './config/firebase.config'
firebase.initializeApp(firebaseConfig)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: {
        Main: true ,
        SignUp: false,
        SignIn: false,
        Todo: false,
        LogOut: false
      },
      todos: [],
      isEdit: false
    }
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.handleDelTodo = this.handleDelTodo.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
    this.onKeyDownSave = this.onKeyDownSave.bind(this)
    this.onClickSignUp = this.onClickSignUp.bind(this)
    this.onClickSignIn = this.onClickSignIn.bind(this)
    this.dangki = this.dangki.bind(this)
    this.dangnhap = this.dangnhap.bind(this)
    this.onClickLogOut = this.onClickLogOut.bind(this)
  }

  onClickSignUp(){  
    this.setState({
      display : {
        Main: true,
        SignUp:true,
      }
    })
  }

  onClickSignIn(){  
    this.setState({
      display : {
        Main: true,
        SignIn:true,
      }
    })
  }

  dangki(){
    this.setState({
      display : {
        Main: true,
        SignUp:false,
        SignIn:true,
      }
    })
  }

  dangnhap(){
    this.setState({
      display : {
        Main: false,
        SignIn:false,
        Todo:true,
        LogOut : true
      }
    })
  }

  onClickLogOut(){
    this.setState({
      display: {
        Main:true,
        SignIn:true,
        Todo:false
      }
    })
  }

  handleAddTodo(e) {
    if (e.key == "Enter") {
      let todos = this.state.todos
      todos.push({
        content: e.target.value,
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
      selectedindx: index
    })
  }

  onClickSave(index, content) {
    let todos = this.state.todos
    todos[index].content = content
    this.setState({
      isEdit: false,
      todos: todos
    })
    console.log(this.state)
  }

  onKeyDownSave(e, index, content) {
    if(e.key=="Enter"){
      let todos = this.state.todos
      todos[index].content = content
      this.setState({
        isEdit: false,
        todos: todos
      })
      console.log(this.state)
    }
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
    if (this.state.isEdit == true) {
      return (
        <TodoEditor {...this.state.todos[this.state.selectedindx]} indx={this.state.selectedindx} onClickSave={this.onClickSave} onKeyDownSave={this.onKeyDownSave} />
      )
    }
    else {
      return (
        <div className="App">
          {
            this.state.display.Main &&
            <Sign onClickSignUp={this.onClickSignUp} onClickSignIn={this.onClickSignIn} />
          }
          {
            this.state.display.LogOut && 
            <LogOut onClickLogOut={this.onClickLogOut}/> 
          }
          <Header />
          {
            this.state.display.Todo &&
            <div className="hientodo">
              <Form onKeyDown={this.handleAddTodo} />
              <div className="todos">
                {this.state.todos.map((todo, ind) =>
                  (<List key={ind} {...todo} onClickEdit={() => this.handleEditTodo(ind)} onClickDel={() => this.handleDelTodo(ind)} />)
                )}
              </div>
            </div>
          }
          {
            this.state.display.SignUp &&
            <SignUp dangki={this.dangki}/>
          }
          {
            this.state.display.SignIn &&
            <SignIn dangnhap={this.dangnhap}/>
          }
        </div>
      );
    }
  }
}

export default App;