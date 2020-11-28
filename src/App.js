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
          let datas = data.search.response.projects.project
          let charity = []
          for(let i = 0 ; i <datas.length ; i++){
            charity.push({
              imageLink: datas[i].imageLink,
              title : datas[i].title,
              country: datas[i].country,
              region: datas[i].region,
              activities: datas[i].activities,
              projectLink: datas[i].projectLink
            })
          }
          this.setState({
            charity: charity
          })
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