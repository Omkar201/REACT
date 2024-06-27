import React  from "react";
import { useMemo, useState } from "react";
import findNthPrime from "../utiles/Prime";

const UseMemo =()=>{
    const [a,setA]=useState(0)
    const[darktheme,setDarktheme]=useState(false)

    const Prime=useMemo(()=>findNthPrime(a),[a])
    return(
        <div className={
        "m-4 p-4 w-96 h-96 border border-black" + (darktheme && " bg-sky-400 text-white")
      }>
    
    <div>
      <button className="m-10 p-2 bg-green-600" onClick={()=>setDarktheme(!darktheme)}>Toggle</button>
    </div>
      <div>
        <input
          className="border text-blue-400 border-black w-72 p-2"
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
      </div>
      <div>
        <h1 className="text-red-400">nth Prime : {Prime}</h1>
      </div>
      UseMemo 
      </div>
    )
}
export default UseMemo