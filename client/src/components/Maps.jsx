import usa from './images/usa.png'
import './maps.css';

export const Maps = ()=>{
    // const Cities = ['Atlanta','Dallas-Fort Wortj','New York City', 'Sacramento', 'Austin', 'Denver', 'Palm Springs', 'San Diego', 'Baltimore-Maryland', 
    //                  'Las Vegas', 'Philadelphia', 'San Francisco Bau Area', 'Boston', 'Los Angles', 'Phoenix', 'Seattle','Charlotte',
    //                  'Miami','Pittsbugh', 'Tampa Bay','Chicago','Minneapolis-St. Paul','Portland','Washington D.C.'
    //                   ];
    const contries = ['United States','Canada', 'Switzerland','Ecuador','Spain','Australia','Chile','Ireland','Brazil','Poland','New Zealand', 'Sri Lanka','Mexico',
                       'United Kingdom','Taiwan(ROC)','Sweden','France','Italy','South Africa', 'Gautemala','Japan','Portugal','Belgium','Costa Rice']

    const Cities = [{loc:'Seattle',coor:'0 0 0 2%'},{loc:'Portland',coor:'3.3% 0 0 2%'},{loc:'Minneapolis-St. Paul',coor:'-3% 0 0 43.5%'},{loc:'Chicago',coor:'2% 0 0 50%'},
    {loc:'Denver',coor:'4% 0 0 26%'},{loc:'Boston',coor:'-10% 0 0 72%'},{loc:'New York City',coor:'0 0 0 69%'},{loc:'Pittsbugh',coor:'-1.5% 0 0 61.5%'},{loc:'Philadelphia',coor:'-3% 0 0 68%'},
    {loc:'Baltimore-Maryland',coor:'-2% 0 0 66%'},{loc:'Washington D.C.',coor:'-1% 0 0 64%'},{loc:'Sacramento',coor:'-3% 0 0 5%'},{loc:'San Francisco Bau Area',coor:'-1.5% 0 0 3%'},{loc:'Las Vegas',coor:'-2% 0 0 12%'},
    {loc:'Los Angles',coor:'2% 0 0 7%'},{loc:'Palm Springs',coor:'-3% 0 0 9%'},{loc:'Phoenix',coor:'-4.5%. 0 0 15%'},{loc:'San Diego',coor:'0 0 0 8.5%'},{loc:'Dallas-Fort Wortj',coor:'-2% 0 0 36%'},  {loc:'Atlanta',coor:' -4% 0 0 54%'},
    {loc:'Charlotte',coor:'-6% 0 0 60%'},
    {loc:'Austin',coor:'6% 0 0 35.5%'},{loc:'Tampa Bay',coor:'-1% 0 0 57%'},
    {loc:'Miami',coor:'-1% 0 0 60%'}
     ];

    return (
        <div className='map'>
           <div>
               <h1>Cities near me</h1>
               <div id='map' >
                   <div>
                   {/* <div style={{background:`url(${usa})`, width:'100%',height:'450px',backgroundSize:'100% 450px'}}> */}
                       <img width='100%' src={usa} alt="" />
                        {/* {Cities.map((e)=>
                        <div style={{margin:`${e.coor}`,backgroundColor:'white',width:'30px',height:'30px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'50%',cursor:'pointer'}}><svg width="20px" height="20px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z" fill="#000000"></path></svg>
                        </div>
                        )} */}
                   </div>
               </div>
               <div className='cities'>
                    {Cities.map((element,i)=>
                        <div key={i}>{element.loc}</div>
                    )}
               </div>
               <h1>Countries with Uber Eats</h1>
               <div className='countries cities'>
                   {contries.map((elements,i)=>
                     <div key={i}>{elements}</div>
                   )}
               </div>
           </div>
        </div>
    )
}