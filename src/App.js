import React, { useState } from 'react';
import './App.css';
import firebase from './initFirebase';

const App = ()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = ()=>{
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user=>{
      console.log(user);
      if(user){
        fetch('http://localhost:10100/users')
        .then(r=>r.json())
        .then((res)=>{
            console.log(res);
        })
        .catch(err=>console.log(err));
        }
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  return (
    <div className="App">
      email: <input onChange={e=>setEmail(e.target.value)} name="email" placeholder="email"></input><br></br>
      password: <input onChange={e=>setPassword(e.target.value)} name="password" type="password"></input>
      <button onClick={signIn}>innskrá</button>
    </div>
  );
}

export default App;
