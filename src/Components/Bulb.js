import React from 'react'
const on_img = './on.jpg'
const off_img = './off.jpg'

export class Bulb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {    // this là toàn bộ class và this là {}
            isOn: true
        }
        this.switch_bulb = this.switch_bulb.bind(this)
    }
    switch_bulb() {
        // thay doi state?
        this.setState({isOn:!this.state.isOn})
    }
    render() {
        return (
            // <div >{100>10?"true":"false"}</div>    // trong {} la 1 bieu thuc js ra ket qua nen if else k dc
            <div>
                <img src={this.state.isOn ? on_img : off_img} />
                <input type="button" value="Switch" onClick={this.switch_bulb} />
            </div >
        )
    }

}