import { useDispatch } from 'react-redux'
import { pageStatus } from '../redux/openPage/action';
import './navbaar.css'

export const Navbar = ()=>{
    const dispatch = useDispatch();
    return (
        <div className='navbar' style={{
            background:'transparent' 
            }}>
          <div style={{width:'95%',margin:'auto',display:'flex', justifyContent:'space-between'}}>
            <div style={{display:'flex'}}>
                <div onClick={()=>dispatch(pageStatus(true))} className="menudiv"><svg style={{width:'25px', cursor:'pointer'}} className='menuicon' aria-hidden="true" focusable="false" viewBox="0 0 20 20"><path d="M19.167 3.333H.833v2.5h18.334v-2.5zm0 5.834H.833v2.5h18.334v-2.5zM.833 15h18.334v2.5H.833V15z"></path></svg></div>
                <div className='menudiv'style={{cursor:'pointer'}}><img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/8b969d35d373b512664b78f912f19abc.svg" alt="" /></div>
            </div>
            <div ><button className={'signbtn'}>Sign in</button></div>
          </div>
        </div>
    )
}