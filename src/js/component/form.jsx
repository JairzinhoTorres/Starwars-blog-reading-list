import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";

export const Form = () => {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const {store, actions}=useContext(Context)

  function enviarDatos(e) {
   e.preventDefault()
   actions.login(email,password)
   setEmail("")
   setPassword("")
   // fetch('https://3000-4geeksacade-flaskresthe-v0h1chtk4mc.ws-eu84.gitpod.io/login',{
   //     method:'POST',
   //     headers: {
   //         'Content-Type': 'application/json'
   //         // 'Content-Type': 'application/x-www-form-urlencoded',
   //       },
   //     body: JSON.stringify({"email":email,"password":password}) // body data type must match "Content-Type" header
   // })
   // .then((response) => response.json())
   // .then((data) => console.log(data))
   // .catch((err)=>console.log(err))
  }


//    if (condition) {//true
//     //bloque de codigo
//    }else{//false
// //bloque de codigo
//    }

// condition ? bloque de codigo si es true : bloque de codigo si es false

// store.auth === true ? <Navigate to="/ruta hacia donde ir"/> : <Formulario/>
  
 return (
   <>
   {store.auth === true ? <Navigate to="/demo"/>:
   <form className="w-50 mx-auto" onSubmit={enviarDatos}>
     <div className="mb-3 container">
       <label htmlFor="exampleInputEmail1" className="form-label">
         Email address
       </label>
       <input
         type="email"
         className="form-control"
         id="exampleInputEmail1"
         aria-describedby="emailHelp"
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
       />
     </div>
     <div className="mb-3">
       <label htmlFor="exampleInputPassword1" className="form-label">
         Password
       </label>
       <input
         type="password"
         className="form-control"
         id="exampleInputPassword1"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
       />
     </div>
     <button type="submit" className="btn btn-primary">
       Submit
     </button>
   </form>}
   </>
   
 );
};

export default Form;