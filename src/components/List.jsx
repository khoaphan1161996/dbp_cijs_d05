import React from 'react'
import '../assets/css/List.css'

export class List extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ul className="todos">
                <li className="todo">
                    <p className="inputTask margin" type="text" >{this.props.todos}</p>
                    <div className="but">
                        <button onClick={this.props.onClickEdit} className="marginbut"><i className="fa fa-edit"></i></button>
                        <button onClick={this.props.onClickDel} className="marginbut"><i className='fa fa-trash'></i></button>
                    </div>
                </li>
            </ul>
        )
    }
    
}