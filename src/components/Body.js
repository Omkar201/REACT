import React from "react";
import { useState, useEffect } from "react";
// import resList from "../utils/mockData"
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import RestaurantCard from "./Resturant.js";
 import useonline from "../utiles/Useonline.js";
const Body=()=>{


    const [resList,setResList]= useState([])
    const[data,setData]=useState("")
    const [dummy,setDummy]=useState([])
    // resList=[]
     const isonline=useonline()

    const api="https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    useEffect(()=>{
        const fetchData=async()=>{
            const data= await fetch(api)
            const out= await data.json()
            console.log(out.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            setResList(out.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            setDummy(out.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)



        }
        fetchData()


        

    },[])
     if(isonline==false) return <h1>seems like your offline,pls check your internet connection</h1>

    return (resList.length===0) ? (<Shimmer/>): (
        <div >
        {/* <button  onClick={()=>{
            const data= resList.filter(each=> each.info.avgRating> 4.3)
            setResList(data)
            console.log(data)
        }}>Top rated Restaurant</button> */}
        <div>
            {/* <input  onChange={(e)=>{


              setData(e.target.value)


            }} /> */}
            {/* <button onClick={()=>{
                const searchData=dummy.filter(each=>each.info.name.toUpperCase().includes(data.toUpperCase()))
               setResList(searchData)
                // console.log(searchData)
            }}>Filter</button> */}
        </div>
        <div className="flex flex-wrap">
        {
            resList.map((each,index)=><Link to={"/restaurant/"+each.info.id}> <RestaurantCard key={each.info.id} data={each}/></Link>)
        }
        </div>   
        </div>
       
    )
}




export default Body
