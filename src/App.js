import './App.css';
import React from 'react'
//import components
import { Header } from './components/Header'
import { Form } from './components/Form'
import { List } from './components/List'
import { TodoEditor } from './components/TodoEditor'
import { Sign } from './components/Sign'
import { SignUp } from './components/SignUp'
import { SignIn } from './components/SignIn'
import { LogOut } from './components/LogOut'
import { UTodos } from './controllers/TodoController'
import { SignUpC } from './controllers/TodoController'
import { SignInC } from './controllers/TodoController'
import {getTodoOf} from './controllers/TodoController'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: {
        Main: true,
        SignUp: false,
        SignIn: false,
        Todo: false,
        LogOut: false
      },
      todos: [],
      isEdit: false,
      name: "",
      pass: "",
      Sname: "",
      Spass: ""
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
    this.handleChangeSignUp = this.handleChangeSignUp.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  onClickSignUp() {
    this.setState({
      display: {
        Main: true,
        SignUp: true,
      }
    })
  }

  onClickSignIn() {
    this.setState({
      display: {
        Main: true,
        SignIn: true,
      }
    })
  }

  dangki() {
    SignUpC(this.state.name, this.state.pass)
    this.setState({
      display: {
        Main: true,
        SignUp: false,
        SignIn: true,
      }
    })
  }

  dangnhap() {
    let status = false
    SignInC(this.state.Sname, this.state.Spass, status)
      .then(status => {
        if (status === true) {
          // this.setState({
          //   display: {
          //     Todo: true,
          //     LogOut: true
          //   }
          // })
          getTodoOf()
          .then(
            (todos) => {
              this.setState({
                todos: todos,
                display: {
                  Todo: true,
                  LogOut: true
                }
              })
            }
          )
        }
        else {
          alert("Sai id hoặc password")
        }
      })

  }

  onClickLogOut() {
    localStorage.removeItem("userID");
    this.setState({
      display: {
        Main: true,
        SignIn: true,
        Todo: false
      }
    })
  }

  handleAddTodo(e) {
    if (e.key === "Enter") {
      let todos = this.state.todos
      todos.push(
        e.target.value,
      )
      this.setState({
        todos: todos,
      })
      // console.log(this.state)
      UTodos(this.state.todos)
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
    todos[index] = content
    this.setState({
      isEdit: false,
      todos: todos
    })
    // console.log(this.state)
    UTodos(this.state.todos)
  }

  onKeyDownSave(e, index, content) {
    if (e.key === "Enter") {
      let todos = this.state.todos
      todos[index] = content
      this.setState({
        isEdit: false,
        todos: todos
      })
      // console.log(this.state)
      UTodos(this.state.todos)
    }
  }

  handleDelTodo(index) {
    let todos = this.state.todos
    todos.splice(index, 1)
    this.setState({
      todos: todos,
    })
    UTodos(this.state.todos)
  }

  handleChangeSignUp(e, type) {
    if (type === 'password') { this.setState({ pass: e.target.value }) }
    if (type === 'name') { this.setState({ name: e.target.value }) }
  }

  handleChange(e, type) {
    if (type === 'password') this.setState({ Spass: e.target.value })
    if (type === 'name') this.setState({ Sname: e.target.value })
  }

  render() {
    if (this.state.isEdit === true) {
      return (
        <TodoEditor todoE={this.state.todos[this.state.selectedindx]} indx={this.state.selectedindx} onClickSave={this.onClickSave} onKeyDownSave={this.onKeyDownSave} />
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
            <LogOut onClickLogOut={this.onClickLogOut} />
          }
          <Header />
          {
            this.state.display.Todo &&
            <div className="hientodo">
              <Form onKeyDown={this.handleAddTodo} />
              <div className="todos">
                {this.state.todos.map((todo, ind) =>
                  (<List key={ind} todos={todo}
                    onClickEdit={() => this.handleEditTodo(ind)} onClickDel={() => this.handleDelTodo(ind)} />)
                )}
              </div>
            </div>
          }
          {
            this.state.display.SignUp &&
            <SignUp dangki={this.dangki} handleChangeSignUp={this.handleChangeSignUp} />
          }
          {
            this.state.display.SignIn &&
            <SignIn dangnhap={this.dangnhap} handleChange={this.handleChange} />
          }
        </div>
      );
    }
  }
}

export default App;