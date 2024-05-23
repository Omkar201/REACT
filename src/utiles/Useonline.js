import { useState,useEffect } from "react";

const useonline=()=>{
    const[isonline,setIsonline]=useState(true)

    useEffect(()=>{
        window.addEventListener("online",()=>{
            setIsonline(true)
        })
        window.addEventListener("offline",()=>{
            setIsonline(false)
        })
        

    })
    return isonline
}

export default useonline