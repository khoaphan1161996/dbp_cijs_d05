import React from 'react'
import './App.css';
import {Header} from  './components/Header'
import {Search} from './components/Search'
import {Show} from './components/Show'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      charity: [
        {
          img: "https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg",
          title: "USA-Charity",
          homecountry: "USA",
          serves: "VietNam",
          instruction: "Is a Charity from USA .....",
          link : "https://www.facebook.com/"
        },
        {
          img: "https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg",
          title: "USA-Charity",
          homecountry: "USA",
          serves: "VietNam",
          instruction: "Is a Charity from USA .....",
          link : "https://www.facebook.com/"
        },
        {
          img: "https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg",
          title: "USA-Charity",
          homecountry: "USA",
          serves: "VietNam",
          instruction: "Is a Charity from USA .....",
          link : "https://www.facebook.com/"
        },
        {
          img: "https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg",
          title: "USA-Charity",
          homecountry: "USA",
          serves: "VietNam",
          instruction: "Is a Charity from USA .....",
          link : "https://www.facebook.com/"
        },
        {
          img: "https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg",
          title: "USA-Charity",
          homecountry: "USA",
          serves: "VietNam",
          instruction: "Is a Charity from USA .....",
          link : "https://www.facebook.com/"
        }
      ],
    }
    this.searchCharity = this.searchCharity.bind(this)
  }
  searchCharity(e){
    if(e.key="Enter"){
      console.log(e.target.value)
    }
  }

  render() {
    return (
      <div className="App">
          <Header/>
          <Search onChange={this.searchCharity}/>
          <div className="Shows">
              {this.state.charity.map((charity,ind)=><Show key={ind} {...charity} />)}
          </div>
      </div>
    );
  }

}

export default App;
