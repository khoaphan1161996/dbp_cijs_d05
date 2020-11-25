import React from 'react'
import './App.css';
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Show } from './components/Show'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books : [],
      find : ''
    }
    this.Findbook = this.Findbook.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  Findbook(){
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.find}`)
    .then(res=>res.json())
    .then(data => {console.log(data)
      let books = []
    let n = data.length
    for(let i = 0 ; i < n ; i ++ ){
      books.push({
          <Show/>
      })  
    }
    })
  }
  onChange(e){
    this.setState({
      find: e.target.value
    })
    // console.log(this.state.find)
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Search onChange={this.onChange} onClick={this.Findbook} />
        <div className="books">

        </div>

      </div>
    )
  }
}

export default App;
