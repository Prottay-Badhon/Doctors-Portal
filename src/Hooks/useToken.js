import { useEffect, useState } from "react"

const useToken =(user)=>{
const [token,setToken]= useState("")
useEffect(()=>{
   const email = user?.user?.email;
    const url = `http://localhost:5000/user/${email}`
    const currentUser ={email}
  if(email){
    fetch(url,{
        method: "PUT",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const token = data.token;
        localStorage.setItem("accessToken",token)
        setToken(token);
    })
  }
   
},[user])
return [token,setToken]
}
export default useToken