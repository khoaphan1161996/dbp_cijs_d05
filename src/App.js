import React from 'react'
import './App.css';
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Show } from './components/Show'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      charity: [
        {
          img: "https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg",
          title: "USA-Charity",
          homecountry: "USA",
          serves: "VietNam",
          instruction: "Is a Charity from USA .....",
          link: "https://www.facebook.com/"
        },
      ],
    }
    this.searchCharity = this.searchCharity.bind(this)
  }
  searchCharity(e) {
    if (e.key === "Enter") {
      const url_target =
        "https://api.globalgiving.org/api/public/services/search/projects";

      const api_key = "79cca3e8-01cb-4259-84a1-01d059c6882f";
      const search = `${e.target.value}`
      const url = `${url_target}?api_key=${api_key}&q=${search}`;

      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      }).then(res => res.json())
        .then(data => {
          console.log(data)
        }).catch(err => console.log(err))
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search onKeyDown={this.searchCharity} />
        <div className="Shows">
          {this.state.charity.map((charity, ind) => <Show key={ind} {...charity} />)}
        </div>
      </div>
    );
  }

}

export default App;