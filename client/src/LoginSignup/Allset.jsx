import { useNavigate } from "react-router-dom"
import { Nav } from "./Nav"



export const Allset = ()=>{
    const navigate= useNavigate();
     const handlesubmit=()=>{
         navigate('/')
     }
    return(
        <div>
            <Nav/>
            <div className="abhiemail">
                 <div className="allset">
                     <div><span style={{color:'white'}} class="material-icons-outlined">check</span></div>
                 </div>
                 <div>All Set</div>
                 <div>You'll be signed in to your account momentarily. If nothing happens, click continue.</div>
                 <div className="abhibtn">
                        <button
                            value={'next'}
                            style={{ background:'#EEEEEE', color:'black', fontSize:'16px', fontWeight:'500', lineHeight:'20px'}}
                            type="submit"
                            onClick={()=>{handlesubmit()}}
                            // onMouseOver={handleCursor}
                        >
                        continue <span className="material-icons-outlined">east</span>
                        </button>
                    </div>
            </div>
        </div>
    )
}