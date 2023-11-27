import React, { useState,useEffect } from 'react'
import '../Assets/CSS/SignIn.css';
// import Button from '@mui/material/Button';
import  TextField  from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Addnewuser } from '../jsonapi';
// import { Checkbox } from '@mui/material';
import { getDatas } from '../jsonapi';

export const SignIn = () => {
  const navi=useNavigate();
  const [data,setData]=useState({name:"",email:"",pass:""});
  const [edata,setEdata]=useState([]);
  useEffect(()=>
    {
        const fetchdata=async()=>
        {
            const response=await getDatas();
            setEdata(response.data);
        }
        fetchdata();
    },[])
  const setnavi = (event) =>
  {
    event.preventDefault();
    const un=document.getElementById("demo-helper-text-misaligned-no-helper5").value;
    const une=edata.findIndex((user)=>user.name===un);
    console.log(une);
    if(une===-1)
    {
      Addnewuser(data);
      navi('/Login111');
    }
    else
    alert("This username is already exists");
  }
  const home = () =>
  {
    navi('/Home')
  }
  const lll = () =>
  {
    navi('/Login111')
  }
 
  const top100Films = [
    { label: 'Namakkal'},
    { label: 'Ariyalur'},
    { label: 'Chengalpattu'},
    { label: 'Chennai'},
    { label: 'Coimbatore'},
    { label: 'Cuddalore'},
    { label: 'Dharmapuri'},
    { label: "Dindigul"},
    { label: 'Kallakurichi'},
    { label: 'Kancheepuram'},
    { label: 'Karur'},
    { label: 'Krishnagiri'},
    { label: 'Madurai'},
    { label: 'Kanniyakumari'},
    { label: 'Perambalur'},
    { label: 'Perambalur'},
    { label: 'Ramanathapuram'},
    { label: 'Salem'},
    { label: 'Sivagangai'},
    { label: 'Thanjavur'},
    { label: 'Thoothukudi'},
    { label: 'Trichirappalli'},
    { label: 'Thirunelveli'},
    { label: 'Tiruppur'},
    { label: 'Tiruppur'},
    { label: 'Udagamandalam'},
    { label: 'Vellore'},
    { label: 'Viluppuram'},
    { label: 'Virudhunagar'}
  ];
  const [checkboxcheck1,setCheckboxcheck1]=useState(false);
  const [checkboxcheck2,setCheckboxcheck2]=useState(false);
  const [checkboxcheck3,setCheckboxcheck3]=useState(false);
  return (
<>
    <div className='fullsi'>
            {/* <div className='chilsi'> */}

             </div>
               <div id='outersi'>
                      <div id='topsi'>
                      <button id='xsi' onClick={home}>X</button>
                      </div>
                      <div className='totsi'>
                      <div id='profsi'><span></span></div>
                          <form id='forsi' onSubmit={setnavi}>
                              <table>
                                  <tr><td><TextField id="demo-helper-text-misaligned-no-helper5" label="Name" className='xxsi' required onChange={(event)=>setData({...data,name:event.target.value})}/></td></tr>
                                  <tr><td><TextField id="demo-helper-text-misaligned-no-helper6"  label="Email" className='xxsi' required onChange={(event)=>setData({...data,email:event.target.value})}/></td></tr>
                                  <tr><td><TextField id="demo-helper-text-misaligned-no-helper7" label="Password" type='password' className='xxsi' required onChange={(event)=>setData({...data,pass:event.target.value})}/></td></tr>
                              </table>
                                  <div className='checkboxsi'>
                                  <input  type='checkbox' className='chesi' label='kandro1' checked={checkboxcheck1} onClick={(event)=>{setCheckboxcheck1(true);setCheckboxcheck2(false);setCheckboxcheck3(false)}}></input>Male
                                  <input type='checkbox' className='ches' label='kandro2'checked={checkboxcheck2} onClick={(event)=>{setCheckboxcheck1(false);setCheckboxcheck2(true);setCheckboxcheck3(false)}}></input>Female
                                  <input type='checkbox' className='ches' label='kandro3'checked={checkboxcheck3} onClick={(event)=>{setCheckboxcheck3(true);setCheckboxcheck2(false);setCheckboxcheck1(false)}}></input>Others<br></br>
                                  </div>
                                  <div className='dissi'>
                                  <table>
                                      <tr><td>I'm reasiding in :</td></tr><tr><td>
                                      <Autocomplete disablePortal id="combo-box-demo" options={top100Films} sx={{ width: 270  }} renderInput={(params) => <TextField {...params} label="Ex.Chennai" required />}/>
                                        </td></tr>
                                  </table>
                                  </div>
                          <div className='bottumsi'>
                            <button className='consi' type='submit'>Continue</button>
                          </div>
                      </form>
                          <div className='loglog'>
                            <p>Already you have an account:<button className='ulla' onClick={lll} >Login</button></p>
                          </div>
                        </div>
            </div>
    {/* </div> */}
    
</>
  )
}
