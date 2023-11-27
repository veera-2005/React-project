import React, { useEffect, useState } from 'react'
import  TextField  from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import '../Assets/CSS/Login111.css';
import { getDatas } from '../jsonapi';

const Login111 = () => {
    const navi = useNavigate();
    const [data,setData]=useState([]);
    useEffect(()=>
    {
        const fetchdata=async()=>
        {
            const response=await getDatas();
            setData(response.data);
        }
        fetchdata();
    },[])
    const hand =(event)=>
    {
        const un=document.getElementById("demo-helper-text-misaligned-no-helper1").value;
        const pw=document.getElementById("demo-helper-text-misaligned-no-helper2").value;
        const une=data.findIndex((user)=>user.name===un);
        const eme=data.findIndex((user)=>user.email===un);
        if(une===-1&&eme===-1)
        alert("Username/Password Doesn't Exist");
        else if((une!==-1&&data[une].pass===pw)||(eme!==-1&&data[eme].pass===pw))
        navi('/Home');
        else
        alert("Password Doesn't Match");
        event.preventDefault();
    }
  return (
    <>
        <div className='bigboss'>
            <div className='loos'>
            <div id='profsi1'><span></span></div>
                <form >
                    <table className='great'>
                        <tr>
                            <td>
                                Username:
                            </td>
                            <td>
                            <TextField id="demo-helper-text-misaligned-no-helper1" label="Name" className='xxsi' required/>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                Password:
                            </td>
                            <td>
                            <TextField id="demo-helper-text-misaligned-no-helper2" label="Password" type='password' className='xxsi' required/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                               Confrim Password:
                            </td>
                            <td>
                            <TextField id="demo-helper-text-misaligned-no-helper2" label="Confrim Password" type='password' className='xxsi' required/>
                            </td>
                        </tr>
                    </table>
                        
                            <button className='in'on onClick={hand}>Login</button>
                        
                </form>
            </div>
        </div>
    </>
  )
}

export default Login111