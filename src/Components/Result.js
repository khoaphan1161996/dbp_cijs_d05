import React from 'react'
import '../assets/css/Result.css'

export function Result(props){
    return (
        <div>
            <h4>{props.name}</h4>
            <h2>{props.temp}</h2>
            <img src={props.img}/>
            <h4>{props.status}</h4>
        </div>
    )
}