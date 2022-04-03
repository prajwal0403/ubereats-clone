import "./navbar.css"
import { GiHamburgerMenu} from "react-icons/gi";
import navim from "./nav.png"
import uber from "./uber.png"
import { IoCartOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { pageStatus } from "../../redux/action";
import { Link } from "react-router-dom";


export const Navbar=()=>{
    const dispatch = useDispatch();
    
    return <div>
       <div className="navMain">
       <div onClick={()=>dispatch(pageStatus(true))}><GiHamburgerMenu className="menu1"/></div>
       <Link to={'/'}><div className="uber"><img style={{height:"40%"}} src={uber} alt="" /></div></Link> 
       <div className="loc"><img style={{height:"50p%"}}src={navim} alt="" /></div>
       <div><input className="btns" type="text" placeholder="   &#x1f50d;    Food, groceries, drinks, etc" /></div>
       <button className="btn1"><IoCartOutline className="cart"/>  Cart</button>
       <button className="btn2">Sign In</button>
    </div>
    </div>
     
}