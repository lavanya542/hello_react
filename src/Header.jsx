import {Logo_URL} from "./utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useContext} from "react";
import userContext from "./utils/UserContext";
import {useSelector} from "react-redux";
const Header=()=>{
    const [btnReact,setBtnReact]=useState("Login");
    const data=useContext(userContext);
    const cartItems=useSelector((store)=>store.cart.items);
    return (
        <div className="flex justify-between bg-blue-100">

      
        <img src={Logo_URL} className="w-20"></img>
        <ul className="flex space-x-4 justify-center m-10">
            <li> 
                <Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/groceries">Groceries</Link></li>
            <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
            <li><Link to="/">profile</Link></li>
            <li><button className="btn-react" onClick={()=>{btnReact==="Login"?setBtnReact("Logout"):setBtnReact("Login");
           
        }}>{btnReact}</button></li>
        
           {/* {console.log("button clicke")} */}
        <li>{data.loggedUserName}</li>
        </ul>
        </div>
    )
}
export default Header;