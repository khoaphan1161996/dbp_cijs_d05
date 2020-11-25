import './App.css';
import React from 'react'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Show } from './components/Show'

const url = "https://www.googleapis.com/books/v1/volumes?q=quilting"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  API(e) {
    return fetch(url)
    .then((res) => res.json())
  }

  search(e){
    this.API()
    return 
  }

  // handleKeyDown(e) {

  //     .then(data => {
  //       let books = this.state.books
  //       let items = data.items.map((value) => {
  //         return {
  //           title: value.volumeInfo.title,
  //           author: value.volumeInfo.authors ? value.volumeInfo.authors.join(', ') : ' ',
  //           publisher: value.volumeInfo.publisher ? value.volumeInfo.publisher : ' ',
  //           published: value.volumeInfo.publishedDate ? value.volumeInfo.publishedDate : ' '
  //         }
  //       })
  //       books.push(items)
  //       this.setState({ books: books })
  //     })
  // }

  render() {
    // let books = this.search
    return (
      <div className="App">
        <Header />
        <Search onClick={this.handleKeyDown} onKeyDown={this.API} />
        <div className="Shows">
          {/* <Show title="Vinh" img="https://sachvui.com/cover/2015/Dac-nhan-tam.jpg" author="khoa" publisher="KD" published="1996" /> */}
        </div>
      </div>
    );
  }
}

export default App;