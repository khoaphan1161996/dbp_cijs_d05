import './App.css';
import React from 'react'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Show } from './components/Show'

const url = "https://www.googleapis.com/books/v1/volumes?q=quilting"
function API(){
  fetch(url)
  .then((res)=>res.json())
  .then(data => {
    console.log(data)
    let items = data.items.map((value)=>{
      return {
        title : value.volumeInfo.title,
        author: value.volumeInfo.authors[0],
        publisher: value.volumeInfo.publisher,
        published: value.volumeInfo.publishedDate
      }
      
    })
    console.log(items)
  })
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
    API()
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