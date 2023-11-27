import React from 'react'
import '../Assets/CSS/Details.css'
import  TextField  from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
const Details = () => {
    const navi=useNavigate()
    const setnavi = () =>
    {
        navi('/Home')
    }
    const setfor = () =>
    {
        navi('/Outpage')
    }
    const hand = () =>
  {
    navi('/Home');
  }
  const hand1 = () =>
  {
    navi('/About');
  }
  const hand2 = () =>
  {
    navi('/Outpage');
  }
  const first = () =>
  {
    navi('/Home');
  }
  return (
<>
    <div id='navbaro'>
    <ul id='navulo'>
           {/* <button className='b'> */}
          {/* </button> */}
         <li><button id='nlioo' onClick={hand}>
          <h>
            Home
            </h>
          </button>
          </li>
         <li><button id='nlioo' onClick={hand2}>
          <h>
            Donate
            </h>
          </button>
          </li>
         <li><button id='nlioo'>
          <h>
            Pricing
            </h>
          </button>
          </li>
        {/* <li id='nlio'>Donate</li>
        <li id='nlio'>Pricing</li> */}
         <li><button id='nlioo' onClick={hand1}>
          <h>
            About us
            </h>
          </button>
          </li>
        {/* <li id='nlio'>Contact us</li> */}
        <li><button className='wasteboto' onClick={first}>Start a fundraiser</button></li>
    </ul>
</div>


    <div className='overalld'>

    <div className='alld'>
        <div className='imgd'>
        <span></span>
        </div>
        <form  onSubmit={setfor}>
            <div className='fulld'>
                <div className='headd'>
                    <h>Cause Details</h>
                </div>
                <div className='used'>
                <div className='caused'>
                    <table className='tabd'>
                    <tr>
                       <td>
                         <p>I am raising funds for a/an :</p>
                        </td>
                        <td>
                        <select className='select1d'>
                        <option>Medical</option>
                        <option>Education</option>
                        <option>Food and Shelter</option>
                        <option>Memorial</option>
                        <option>•••Others</option>
                        </select>
                        </td>
                        <td>
                        <p>cause</p>
                        </td>
                    </tr>
                    </table>
                </div>
                <div className='Amountd'>
                    <table className='tab2d'>
                        <tr>
                            <td>
                            <p>I want to raise </p>
                            </td>
                            <td>
                        <select className='select2d'>
                            <option>INR</option>
                            <option>USD</option>
                            <option>JPY</option>
                            <option>GBP</option>
                            <option>AUD</option>
                            <option>NZD</option>
                        </select>
                            </td>
                            <td>
                        <TextField id="demo-helper-text-misaligned-no-helper" label="Amount" className='Amod' required/>
                            </td>
                            </tr>
                    </table>
                </div>
                <div className='dated'>
                    <table className='tab3d'>
                        <tr>
                            <td>
                            <p>End date</p>
                            </td>
                            <td>
                            <input type='date' className='dd'></input>
                            </td>
                        </tr>
                    </table>
                </div>
                </div>
                <div className='maind'>
                    <table className='tab4d'>
                        <tr>
                                <td>
                    <button className='md' type='submit'>Medical</button>
                                </td>
                                <td>
                    <button className='ed'type='submit' >Education</button>
                                </td>
                        </tr>
                        <tr>
                                <td>
                    <button className='med'type='submit' >Memorial</button>
                                </td>
                                <td>
                    <button className='od' type='submit'>•••Others</button>
                                </td>
                        </tr>
                    </table>
                </div>
            </div>
        </form>
        <div className='bottumd'>
      <button className='cond' onClick={setnavi}>Cancel</button>
    </div>
    </div>
    </div>
        </>
  )
}

export default Details