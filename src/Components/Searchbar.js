import React from 'react'
import '../assets/css/Searchbar.css'

export function Searchbar(props) {
    return (
        <div className="search">
            <input type="text" placeholder="Search for a city" className="red"  ></input>
            <input type="button" value="SUBMIT" className="red color"/>
        </div>
    )
}