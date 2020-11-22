// import { Bulb } from './Components/Bulb'
// import './App.css';

// function App() {
//   return (
//     <Bulb />
    

//   );
// }

// export default App;

import { Bulb } from './Components/Bulb'
import React from 'react'
const on_img = './on.jpg'
const off_img = './off.jpg'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isOn:true
    }
    this.switch_bulb = this.switch_bulb.bind(this)
  }
  switch_bulb(){
    this.setState({
      isOn:!this.state.isOn
    })
  }
  render(){
    return (
      <div className="App">
          <Bulb img={this.state.isOn ? on_img : off_img} button={this.switch_bulb} ></Bulb>
      </div>
    )
  }
}

export default App;