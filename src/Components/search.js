import { render } from '@testing-library/react'
import React from 'react'
import '../assets/css/search.css'

export class Search extends React.Component {
    constructor(props) {
        super(props)
        // this.setState =
        this.state = {searchText:''}
        this.EnterInput = this.EnterInput.bind(this)
    }
    EnterInput(e){
        // dung de handle su kien on change
        // console.log("e.target.value")
        this.setState({searchText:e.target.value})
        // thay vi log cai nay ra thi lam gi do de no filter ra
        console.log(this.state.searchText) 
    }
    render() {
        return (
            <input onChange={this.EnterInput} className="full" type="text" placeholder="Enter your emoji" />
        )
    }
}
