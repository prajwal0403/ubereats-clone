import "./navbar.css"
import { GiHamburgerMenu} from "react-icons/gi";
import navim from "./nav.png"
import uber from "./uber.png"
import { IoCartOutline } from "react-icons/io5";


export const Navbar=()=>{
    return <div>
       <div className="navMain">
       <div><GiHamburgerMenu className="menu1"/></div>
       <div className="uber"><img style={{height:"40%"}} src={uber} alt="" /></div>
       <div className="loc"><img style={{height:"50p%"}}src={navim} alt="" /></div>
       <div><input className="btns" type="text" placeholder="   &#x1f50d;    Food, groceries, drinks, etc" /></div>
       <button className="btn1"><IoCartOutline className="cart"/>  Cart</button>
       <button className="btn2">Sign In</button>
    </div>
    </div>
     
}