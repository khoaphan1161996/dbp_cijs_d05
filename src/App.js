import './App.css';
import React from 'react'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Show } from './components/Show'

const url = "https://www.googleapis.com/books/v1/volumes?q=quilting"
function url(){
  fetch(url)
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      book : ""
    }
    this.input = this.input.bind(this)
    this.find = this.find.bind(this)
  }
  input(e){
    this.setState({
      book: e.target.value
    })
  }
  find(){
    console.log(this.state.book)
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Search onClick={this.find} onKeyDown={this.input}/>
        <div className="Shows">
          <Show title="Vinh" img="https://sachvui.com/cover/2015/Dac-nhan-tam.jpg" author="khoa" publisher="KD" published="1996" />
          <Show title="Vinh" img="https://sachvui.com/cover/2015/Dac-nhan-tam.jpg" author="khoa" publisher="KD" published="1996" />
          <Show title="Vinh" img="https://sachvui.com/cover/2015/Dac-nhan-tam.jpg" author="khoa" publisher="KD" published="1996" />
          <Show title="Vinh" img="https://sachvui.com/cover/2015/Dac-nhan-tam.jpg" author="khoa" publisher="KD" published="1996" />
          <Show title="Vinh" img="https://sachvui.com/cover/2015/Dac-nhan-tam.jpg" author="khoa" publisher="KD" published="1996" />
        </div>
      </div>
    );
  }
}

export default App;