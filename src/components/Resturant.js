const RestaurantCard=(props)=>{


    const {name,avgRating,deliveryTime,cloudinaryImageId,cuisines,costForTwo} =props.data.info
  //console.log(props.data.info)
    const img_url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    return (
        <div className=" w-[250px] h-[400px] m-4 p-4 rounded-xl bg-gray-100 hover:bg-blue-200">
        <img className=" rounded-xl h-[200px] w-[250px]" src={img_url+cloudinaryImageId}/>
        <h3 className=" font-bold">{name}</h3>
        <p>{avgRating} Rating</p>
        <p>{deliveryTime} mnts</p>
        <p>{cuisines[0]}</p>
        <p>{costForTwo/100}</p>
    </div>
       
    )
}
export default RestaurantCard