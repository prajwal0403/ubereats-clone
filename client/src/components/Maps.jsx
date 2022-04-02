import { useEffect, useState } from 'react';
import './maps.css';

import United_States from './images/United States.png'
  import Canada from './images/Canada.png'
  import Switzerland from './images/Switzerland.png'
  import Ecuador from './images/Ecuador.png'
  import Spain from './images/Spain.png'
  import Australia from './images/Australia.png'
  import Chile from './images/Chile.png'
  import Ireland from './images/Ireland.png'
  import Brazil from './images/Brazil.png'
  import Poland from './images/Poland.png'
  import New_Zealand from './images/New Zealand.png'
  import Sri_Lanka from './images/Sri Lanka.png'
  import Mexico from './images/Mexico.png'
  import United_Kingdom from './images/United Kingdom.png'
  import Taiwan_ROC from './images/Taiwan(ROC).png'
  import Sweden from './images/Sweden.png'
  import France from './images/France.png'
  import Italy from './images/Italy.png'
  import South_Africa from './images/South Africa.png'
  import Gautemala from './images/Gautemala.png'
  import Japan from './images/Japan.png'
  import Portugal from './images/Portugal.png'
  import Belgium from './images/Belgium.png'
  import Costa_Rice from './images/Costa Rice.png'
// import image from ''./image'
// import Switzerland from ''./images/switzerland.png'
// import Ecuador from ''./images/Ecuador.png';
// import Spain from ''./images/'

export const Maps = ()=>{
    const [country, setCountry]= useState([]);
    const [cities, setCities] = useState([]);
    const [maps, setMap] = useState(0);
    useEffect(()=>{
        fetch("/countries").then((res)=>res.json())
        .then((data)=>{setCountry(data); setCities(data[0].cities)});
    },[])
    const contry = [United_States,Canada, Switzerland,Ecuador,Spain,Australia,Chile,Ireland,Brazil,Poland,New_Zealand, Sri_Lanka,Mexico,
                       United_Kingdom,Taiwan_ROC,Sweden,France,Italy,South_Africa, Gautemala,Japan,Portugal,Belgium,Costa_Rice]
    return (
        <div className='map'>
           <div>
               <h1>Cities near me</h1>
               <div id='map' >
                       <img width='100%' src={contry[maps]} alt="" />
               </div>
               <div className='cities'>
                    {cities.map((element,i)=>
                        <div key={i}>{element}</div>
                    )}
               </div>
               <h1>Countries with Uber Eats</h1>
               <div className='countries cities'>
                   {country.map((elements,i)=>
                     <div onClick={()=>{fetch(`/countries/${elements.country}`).then((res)=>(res.json())).then((data)=>{setCities(data[0].cities)}); setMap(i)}} key={i}>{elements.country}</div>
                   )}
               </div>
           </div>
        </div>
    )
}