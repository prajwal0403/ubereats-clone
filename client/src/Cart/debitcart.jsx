import "./debitcard.css"
import {useState} from "react"
import {Link} from "react-router-dom"

export const Debit=({ onClose })=>{
    const [data,setData]=useState("")

    const handlechange =(e)=> {
       const {id,value} =e.target

        setData({
            ...data,
            [id]:value
        })
    }
    const handlesubmit=()=>{
        
        alert("Your credentials are Saved Now you can placed your order")
        console.log(data)
        setData({
            card_number :"",
            cvv:"",
            date:""
        })
    }

    return(
        <div className="fullbox" onClick={e => e.stopPropagation()} >
        <div className="input">
        <input type="number" id="card_number"   placeholder="Enter card number" onChange={handlechange} value={data.card_number} />
        <input type="number" id="cvv"   placeholder="Enter CVV" onChange={handlechange} value={data.cvv}/>
        <input type="date" id="date"   onChange={handlechange} value={data.data}/>
       <button className="succes_button" onClick={handlesubmit}>Pay</button>
        </div>
        </div>
    )
}