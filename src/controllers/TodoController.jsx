//import Firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from '../config/firebase.config'

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();

export function SignUpC(dataname, datapassword) {
    db.collection("user").add({
        name: dataname,
        password: datapassword,
        todos: []
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

export function SignInC(Sname, Spass, status) {
    return db.collection("user").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let data = doc.data()
                if (data.name == Sname && data.password == Spass) {
                    status = true
                    localStorage.setItem("userID", doc.id);
                }
            });
            return status
        });
}

export function UTodos(data) {
    let TodoRef = db.collection("user").doc(localStorage.getItem("userID"));
    return TodoRef.update({
        todos: data
    })
        .then(function () {
            console.log("Document successfully updated!");
        })
        .catch(function (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
}

export function getTodoOf() {
    return db.collection('user').doc(localStorage.getItem("userID"))
        .get().then((doc) => {
            let todos = []
            doc.data().todos.map((value)=>{
                todos.push(value)
            })
            return todos
        })
}