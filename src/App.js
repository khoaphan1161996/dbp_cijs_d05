import logo from './logo.svg';
import './App.css';
import {emojiList} from './resources/emojiList'
import { Header } from './Components/Header'
import { Search } from './Components/Search'
import { ResultList} from './Components/ResultList'
import React from 'react'

console.log(emojiList)
function App() {
  let elist = []
  for(let i = 0 ; i < 20 ; i++){
    elist.push(
      <ResultList symbol= {emojiList[i].symbol} title={emojiList[i].title} />
    )
  }
  return (
    <React.Fragment>
      <Header />
      <Search />
      {elist}
    </React.Fragment>

  );
}

export default App;
