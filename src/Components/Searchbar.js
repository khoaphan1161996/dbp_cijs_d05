import React from 'react'
import '../assets/css/searchbar.css'
export class SearchBar extends React.Component{
    constructor(props){
        super(props)
        // this.setState =
        this.state = {searchText:'hehe'}

        this.EnterInput = this.EnterInput.bind(this)
    }
    EnterInput(e){
        // dung de handle su kien on change
        // console.log("e.target.value")
        this.setState({searchText:e.target.value})
        // thay vi log cai nay thi lam gi do de no filter ra nha!!!!
        console.log(this.state.searchText)
    }
    render(){
        return (
            <input onChange={this.EnterInput} className="full" type="text" placeholder="Enter your emoji..."/>
        )
    }
}