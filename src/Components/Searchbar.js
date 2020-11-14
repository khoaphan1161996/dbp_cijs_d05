import '../assets/css/searchbar.css'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {firebaseConfig} from '../config/firebase.config'
import React from 'react'
// di theo nhom
try{
    firebase.initializeApp(firebaseConfig);
}catch(e){
    console.log(e.message)
}

const db = firebase.firestore();

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
    componentDidMount(){
        // db.collection("users").add({
        //     first: "Ada",
        //     last: "Lovelace",
        //     born: 1815
        // })
        // .then(function(docRef) {
        //     console.log("Document written with ID: ", docRef.id);
        // })
        // .catch(function(error) {
        //     console.error("Error adding document: ", error);
        // });
        let userRef = db.collection("users")
        userRef
        .where("job", "==", "jobless")
        .get()
        .then((querySnapshot) => {  // tìm trong api reference, query là truy vấn , mình phải chỉ định cái range = đặc tính 
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            });
        });
    }
    render(){
        return (
            <input onChange={this.EnterInput} className="full" type="text" placeholder="Enter your emoji..."/>
        )
    }
}