import './App.css';
import React from 'react'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Show } from './components/Show'

const url = "https://www.googleapis.com/books/v1/volumes?q="
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: "",
      books: []
    }
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.search = this.search.bind(this)
  }

  API(name) {
    return fetch(`${url}${name}`)
      .then((res) => res.json())
  }

  search(e) {
    this.setState({
      searchText: e.target.value
    })
  }

  handleKeyDown(e) {
    this.API(this.state.searchText)
      .then(data => {
        let bookss = []
        let len = data.items.length > 20 ? 20 : data.items.length
        for (let i = 0; i < len; i++) {
          bookss.push(data.items[i])
        }

        let books = []
        for(let i = 0 ; i < bookss.length ; i ++){
          books.push({
            title: bookss[i].volumeInfo.title,
            img : bookss[i].volumeInfo.imageLinks.smallThumbnail ,
            author: bookss[i].volumeInfo.authors != undefined ? bookss[i].volumeInfo.authors.join(", ") : "" ,
            publisher: bookss[i].volumeInfo.publisher ,
            published: bookss[i].volumeInfo.publishedDate,
            previewLink: bookss[i].volumeInfo.previewLink
          })
        }

        this.setState({
          books: books
        })
      })
      
      this.setState({
        searchText : ""
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search input={this.state.searchText} onClick={this.handleKeyDown} onChange={this.search} />
        <div className="Shows">
          {this.state.books.map((books, ind) => <Show key={ind} {...books} />)}
        </div>
      </div>
    );
  }
}

export default App;