import React from 'react'
import '../Assets/CSS/DF.css'
import {useNavigate} from 'react-router-dom'

const DF = () => {
   const navi=useNavigate();
   const setdown = () =>
   {
    navi('/Download');
   }
   const setnavi=()=>
   {
     navi('/Home');
   }
  return (
    <div className='full'>
           {/* <ul>
             <li>Home</li>
            <li>Reveiw​</li>
            <li>Contact</li>
            <li>About</li>
            </ul> */}
    <div className='home'>
        <div>
                <button className='sample' onClick={setdown}>Download Our App</button>
        </div>
        <div className='img'>
            <span></span>
        </div>
        <div className='color'> 
        <div className='txt'>
            <h>We know</h><br></br><h>you need </h><br></br>
            <h>funds,we are here</h><br></br>
            <h>to help you</h>
        </div>
        <div className='but'>
                <button className='open' onClick={setnavi}>Start A FREE Fundraiser Now</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default DF