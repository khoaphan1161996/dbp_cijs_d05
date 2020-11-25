import './App.css';
import { Header } from './Components/header'
import { SearchBar } from './Components/Searchbar'
import { Emoji } from './Components/Emoji'
import React from 'react'
import { emojiList } from './resources/emojiList'

function filterEmoji(searchText,data){
  return data.filter((value)=>{
    return value.keywords.indexOf(searchText) != -1
  })
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchText: ""
    }
    this.handleInput = this.handleInput.bind(this)
  }
  createEmojis(emojis){
    let len = emojis>20?20:emojis.length
    let elist_ = []
    for (let i = 0; i < len; i++) {
      elist_.push(
        <Emoji symbol={emojis[i].symbol} title={emojis[i].title} />
      )
    }
    return elist_
  }
  handleInput(e){
    if(e.key === "Enter"){
      this.setState({
        searchText: e.target.value
      })
    }
  }
  render(){
    let elist = this.createEmojis(filterEmoji(this.state.searchText,emojiList))
    return (
      <React.Fragment>
        <Header />
        <SearchBar onChange={this.handleInput} />
        { elist}
      </React.Fragment>
    );
  }
}

export default App;