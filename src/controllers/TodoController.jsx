//import Firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from '../config/firebase.config'

try {
    firebase.initializeApp(firebaseConfig)
} catch (e) {
    console.log(e.message)
}

const db = firebase.firestore();

export function Todos(props){
    return db.collection("users").add({
        todos: [props.todos]
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}