import{Link} from "react-router-dom"
import useonline from "../utiles/Useonline.js"
const Header=()=>{
    const isonline=useonline()
    return (
        <div className=" flex justify-between bg-blue-200 shadow-xl">
            <img className=" w-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIaLnb8qg6Iq6Z3BuHuMp7GnAIpITMEvTlZQ&s" />
            <ul className="flex items-center p-4 m-4">
                <li className="px-2">{isonline ?"🟢":"🔴" }</li>
            <li><Link to="/">Home</Link></li>
                <li className="px-2"><Link to="/about">About</Link></li>
                <li className="px-2"><Link to="/cart">Cart</Link></li>
                <li className="px-2"><Link href="/contact">Contact</Link></li>
                <li className="px-2">Login</li>
            </ul>
        </div>
    )
}
export default Header