import './App.css';
import { Header } from './Components/header'
import { SearchBar } from './Components/Searchbar'
import { Emoji } from './Components/Emoji'
import React from 'react'
import { emojiList } from './resources/emojiList'

function filterEmoji(searchText,data){
  return data.filter((value)=>{
    return value.keywords.indexOf(searchText)!=-1
  })
}

// console.log(emojiList)
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.createEmojis = this.createEmojis.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput(event){
    // console.log(event.target.value)
    this.setState({searchText:event.target.value})
  }
  createEmojis(emojis) {
    let len = emojis.length > 20 ? 20 : emojis.length
    let elist_ = []
    for (let i = 0; i < len; i++) {
      elist_.push(
        <Emoji symbol={emojis[i].symbol} title={emojis[i].title} />
      )
    }
    return elist_
  }
  render() {
    let elist_ = this.createEmojis(filterEmoji(this.state.searchText,emojiList))
    return (
      <React.Fragment>
        <Header />
        <SearchBar onChange={this.handleInput} />
        { elist_}
      </React.Fragment>

    );

    }
  }
    export default App;