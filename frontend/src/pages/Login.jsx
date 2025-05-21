import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
export default function Login() {
  const [u,setU]=useState(""),[p,setP]=useState("");
  const {login}=useAuth();
  return (
    <div style={{padding:20,fontFamily:"sans-serif"}}>
      <h2>Login</h2>
      <input placeholder="Username" value={u} onChange={e=>setU(e.target.value)} /><br/>
      <input type="password" placeholder="Password" value={p} onChange={e=>setP(e.target.value)} /><br/>
      <button onClick={()=>login(u,p)}>Log In</button>
    </div>
  );
}
