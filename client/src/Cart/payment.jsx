import "./payment.css"
import {Box,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio} from "@mui/material"
import {useState} from "react"
import {Modal} from "./model"
import {Link} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import {discount_10,discount_15,discount_20,discount_25} from "../redux/action"



export const Payment=()=>{
    const dispatch=useDispatch()
    const list=useSelector((e)=>e)
    // const data = JSON.parse(localStorage.getItem('uber'));
    // console.log(data);
    const [modal,setModal]=useState(false)
    // var total= 550
    return (
        <>
        { modal && <Modal onClose={() => setModal(false)}/>}
        <div className="container">
            
            
           
    <div style={{width:"50%"}}>
        <div className="Payment">
            <p className="uber">uber</p>
            <p className="eats">Eats</p>
        </div>
        <div className="dish">
            <p className="dishname">McDonald's® (L.A. - Marengo)</p>
        </div>
        <div className="city">
            <div style={{ lineHeight:"10px"}}>
            <p className="LA">Los Angeles</p>
            <p className="ca">CA</p>
      </div>
      <button className="button">Edit</button>
      </div>
      <hr></hr>
    
      <div className="city" style={{marginTop:"10px"}}>
          <div style={{lineHeight:"10px"}}>
      <p className="LA">Meet at Door</p>
      <p style={{marginLeft:"30px",color:"green",}}>Add delivery instructions</p>
      </div>
      <button className="button" style={{marginLeft:"305px"}}>Edit</button>
      </div>
      <hr></hr>

      <div className="delivery_Instruction">
      
      <div className="delivery">
          <p>Delivery Estimate</p>
          <p>20-30 minutes</p>
      </div>
      <div style={{marginLeft:"30px"}}>
      <Box>
          <RadioGroup>
              <div style={{lineHeight:"5px"}}>
              <FormControlLabel control={<Radio  color="default"/>} label="Priority" value="priority" />
              
              <p style={{paddingLeft:"30px",color:"grey"}}>Delivery directly to you</p>
              <hr></hr>
              </div>
              <div>
              <FormControlLabel control={<Radio color="default" />} label="Standard" value="Standard" />
              <hr></hr>
              </div>
              <div>
              <FormControlLabel control={<Radio  color="default"/>} label="Schedule" value="Schedule" />
              <hr></hr>
              </div>
          </RadioGroup>
      </Box>
      </div>
      </div>

      <div className="Payment">
          <p>Payment</p>
      </div>
      <div style={{marginLeft:"30px"}}>
      <div className="method">
          <p>Add Payment Method</p>
          <button className="button" style={{marginLeft:"300px",marginTop:"10px"}} onClick={()=>{setModal(true)}}>Edit</button>
          
          
      </div>
      <hr></hr>
      </div>
      <div style={{marginLeft:"30px"}}>
      <div className="method">
          <p>Add Promo Code</p>
          <button className="button" style={{marginLeft:"340px",marginTop:"10px"}}>Edit</button>    
      </div>
      <hr></hr>
      </div>
      <div className="order_detail">

          <div className="item">
              <p>Your items</p>
              <button className="item_btn" style={{marginLeft:"300px",marginTop:"20px"}}>+  Add items</button> 
          </div>
          <div className="dish_name">
          <select name="Remove" id="Remove">
          
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="Remove">Remove</option>
</select>
              <p style={{fontWeight:"500"}}>McDonald's® (L.A. - Marengo)</p>
              <p>Rs 149</p>
          </div>
          <div className="dish_detail">
            <p>Step 1
            Chow Mein
             Fried Rice
            Step 2 ($1.60)
            The Original Orange Chicken
             Black Pepper Angus Steak</p>
          </div>
      </div>
      
        </div>
        <div className="payment_detail">
            <div className="payment_order">
       <button className="place_order" onClick={()=>alert("Your Order is Placed Please Wait for your Delivery")}>Place Order</button>
       <p  style={{fontSize:"15px",color:"grey"}}>
If you’re not around when the delivery person arrives, they’ll leave your order at the door. By placing your order, you agree to take full responsibility for it once it’s delivered.</p>
      <hr></hr>
       </div>
       <div className="offer_line">
           <p>You're saving with a Rs 0 Delivery Fee until Apr 28</p>
       </div>
       <div className="subtotal">
           <p>Subtotal</p>
           <p style={{fontSize:"15px"}}>Rs 499.00-/-</p>
       </div>
       <div className="subtotal">
           <p>Promotion</p>
           <p style={{color:"green"}}> - Rs 39.00-/-</p>
       </div>
       <div className="subtotal">
           <p>Taxes & Fees</p>
           <p style={{fontSize:"15px"}}>Rs 57.00-/-</p>
       </div>
       <div className="subtotal">
           <p>Delivery Fee</p>
           <p style={{fontSize:"15px"}}>Rs 49.00-/-</p>
       </div>
       <div className="subtotal">
           <p>CA driver benefits</p>
           <p style={{fontSize:"15px"}}>Rs 29.00-/-</p>
       </div>
       
       <div className="subtotal">
           <p>Temporary fuel surcharge</p>
           <p style={{fontSize:"15px"}}>Rs 19.00-/-</p>
           </div>
           <div style={{width:"400px",marginLeft:"100px"}}>
           <hr></hr>
           </div>
       <div className="total">
          <p>Total</p>
          <div>{`$ ${total} ${list}`}</div>
       </div>
       <hr></hr>
       <div className="tip">
         <p className="add_tip">Discount</p>
          </div>
          <div className="tip_button">
              <button className="discount" onClick={()=>dispatch(discount_10(total))}>10%</button>
              <button className="discount" onClick={()=>dispatch(discount_15(total))}>15%</button>
              <button className="discount" onClick={()=>dispatch(discount_20(total))}>20%</button>
              <button className="discount" onClick={()=>dispatch(discount_25(total))}>25%</button>
              

          </div>
          <hr></hr>
           
           
      
       
      
            
        </div>


</div>


    
        
</>
    )
}