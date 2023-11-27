import React from 'react'
import '../Assets/CSS/Download.css'
import { useNavigate } from 'react-router-dom'
const Download = () => {
    const navi = useNavigate()
    const setnavi = () =>
    {
        navi('/Openappd');
        alert('Hand App Installed Successfully!!!');
    }
    
  return (
    <div className='fulld'>
       <div id='navbarod'>
            <ul id='navulod'>
                <li id='gpd'></li>
                <li id='nliod' >Home</li>
                <li id='nliod'>Apps</li>
                <li id='nliod'>Books</li>
                <li id='nliod'>Kids</li>
                <li id='nliod'>Games</li>
                <li id='nliod'>Movies & TV</li>
                {/* <li><button className='wastebotod'>Start a fundraiser</button></li> */}
            </ul>
        </div>
        <div className='name'>
            <div className='Appd'>
                <h>Hand</h>
            </div>
            <div className='name2'>
                <p>Hand <br></br>
                Contains ads. In-app purchases</p>
            </div>
            <div className='tabdiv'>
                <table className='table1'>
                    <tr>
                        <td>
                            150M 
                            reviews
                        </td>
                        <td>
                            50B+ 
                            Downloads
                        </td>
                        <td>
                            Editors Choice
                        </td>
                        <td>
                            Teen
                        </td>
                    </tr>
                </table>
            </div>
        {/* <div className='insbot'> */}
            <button className='insbot' onClick={setnavi}><h>Install</h></button>
        {/* </div> */}
        </div>
        <div className='logo'>

        </div>
    </div>
  )
}

export default Download