import React, { useState } from 'react'
import  TextField  from '@mui/material/TextField';
import '../Assets/CSS/Payment.css'
import { useNavigate } from 'react-router-dom';
const Payment = () => {
    // const [name,setname] = useState('');
    const navi = useNavigate();
    const hand = () =>
    {
        // navi('/Pic');
        alert("Amount "+document.getElementById("Ap").value+" Paid Successfully !!! Thank you! ❤️");
    }
    const back =()=>
    {
        navi('/Details');
    }
  return (
    <div className='fullp'>
        <form onSubmit={hand}>

        <div className='popp'>
            <div className='topp'>
            <p>Make a secure donation</p>
            <button className='canp' onClick={back}>X</button>
            </div>
            <hr></hr>
            <div className='amop'>
                <table className='qqqq'>
                    <tr>
                        <td>

                <p>
                Currency
                </p>
                        </td>
                        <td>
                <select className='select'>
                        <option>INR</option>
                        <option>USD</option>
                        <option>JPY</option>
                        <option>GBP</option>
                        <option>AUD</option>
                        <option>NZD</option>
                </select>

                        </td>
                        <td>

                <TextField  label="Amount" id='Ap' required/>
                        </td>
                    </tr>
                </table>
            </div>
            <div className='txtp'>
                <p>Hand charges NO fees. We rely on donors like you to cover for our expenses.</p>
                <p>Kindly consider a tip. Thank you 🙏</p>
            </div>
            <div>
                <button className='Pay' type="Submit">Continue to pay ₹ INR</button>
            </div>
            <div className='prop'>
                <span></span>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Payment