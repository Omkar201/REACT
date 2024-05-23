import { useState ,useEffect} from "react"


const userestaurantmenu=(id)=>{
    const[menu,setMenu]=useState(null)

    const menu_url="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="
    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch(menu_url + id);
          const data = await res.json();
          setMenu(data);
        //   console.log(data);
        };
    
    
        fetchData();
      }, []);
    
return menu

}

export default userestaurantmenu