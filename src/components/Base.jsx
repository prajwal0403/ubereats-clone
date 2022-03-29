import { useState,useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pageStatus } from '../redux/openPage/action';
import './base.css'
import { Login } from './Login'



export const Base = ()=>{
    const [focused, setFocused] = useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false);
    const page = useSelector((store)=>store.openPage);
    const dispatch = useDispatch();

    const buttonRef = useRef(null);
    const buttonClickedOutside = useOutsideClick(buttonRef);
  
    useEffect(() => {
      // if the the click was outside of the button
      // do whatever you want
      if (buttonClickedOutside) {
        dispatch((pageStatus(false)))
      }
    }, [buttonClickedOutside]);
    return(
        <div 
           className='base'
           style={{
               background:'url(https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/e6b11dc56fb50db03a2e1370a9a7bba5.svg)  left top no-repeat, url(https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/7fc854e8448107a55583d296c2155d8b.svg) right top no-repeat, #ffc043',
           }}  
        >
            <div className='signinpage' style={{display:page.openPage?'block':'none'}}>
                <div ref={buttonRef} className='signin'>
                   <Login /> 
                </div>
            </div>
           <div className='subbase'>
                <div id='h1'>Order food to your door</div>
                <div id='inparea'>
                {/* box-shadow: 0 0 1px #fff inset */}
                    <div id='baseinp' style={{boxShadow:focused?'inset 0 -2px 0 black':"",
                        position:'relative', transition:'all 0.5s'
                    }}>
                        <svg width="30px" height="30px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z" fill="#000000"></path></svg>
                        <input type="text" placeholder='Enter delivery address' onFocus={onFocus} onBlur={onBlur} />
                    </div>
                    <button>Find Food</button>
                </div>
                <div id='subbasesign'>Sign in for your recent addresses</div>
           </div>
        </div>
    )
}










//when sidelogin page opened and clicked outside then this function will work
const useOutsideClick = (ref) => {
    const [outsieClick, setOutsideClick] = useState(null);
  
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (!ref.current.contains(e.target)) {
          setOutsideClick(true);
        } else {
          setOutsideClick(false);
        }
  
        setOutsideClick(null);
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  
    return outsieClick;
  };