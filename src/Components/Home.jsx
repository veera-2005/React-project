import React from "react";
import '../Assets/CSS/Home.css';
// import  Button from "@mui/material/Button";
// import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from "react-router-dom";

const Home = () =>{
    const navi = useNavigate();
    const setnavi = () =>
    {
        navi('/Details')
    }
    const sethome = () =>
    {
        navi('/Outpage')
    }
    const setDo = () =>
    {
        navi('/Details')
    }
    const setAb = () =>
    {
        navi('/About')
    }
    const setD = () =>
    {
        navi('/SignIn')
    }
    return(
        <div className="allh">

        
         <div id='navbaro'>
    <ul id='navulo'>
           {/* <button className='b'> */}
          {/* </button> */}
         <li><button id='nlioo' onClick={sethome}>
          <h>
            Home
            </h>
          </button>
          </li>
         <li><button id='nlioo'onClick={setDo}>
          <h>
            Details
            </h>
          </button>
          </li>
         <li><button id='nlioo'onClick={sethome}>
          <h>
            Donate
            </h>
          </button>
          </li>
        {/* <li id='nlio'>Donate</li>
        <li id='nlio'>Pricing</li> */}
         <li><button id='nlioo' onClick={setAb}>
          <h>
            About us
            </h>
          </button>
          </li>
        {/* <li id='nlio'>Contact us</li> */}
        <li><button className='wastebotooo' onClick={setD}>Login/SignUp</button></li>
    </ul>
        </div>
        <div className="img1h">
        <div className='proppp'><span></span></div>
        </div>
        {/* <div className="img2h"></div> */}
        <div className="img3h"></div>
        <div className="img4h"></div>
        {/* <div className="about-container">
      <div className="pattern-overlay"></div>
      <div className="about-content">
        <h1>About Us</h1>
        <p>Welcome to our website!</p>
      </div>
      <div className="imgggg">
        <div className="handdd">
          <b>Hand</b>
        </div>
        <div className="adddd">
          <b>For Any Queries</b><br>
          </br>
          <b>Email : info@hand.org</b><br></br>
          <b>Contact No :+91 9876543210</b>
        </div>
      </div>
    </div> */}

        <div className="img5h"></div>
        <div className="img6h"></div>
        {/* <div className="img7h"></div> */}
        {/* <div className="img8h"></div> */}
        <div className="img9h">
          
        </div>
        <div className='buth'>
                <button className='openh' onClick={setnavi}>Start A FREE Fundraiser Now</button>
        </div>
        <div className="foot">
          <ul className="foot1">
          <li className="win">© 2023 Dribbble</li>
          <li className="win">© All rights reserved</li>
          <li className="win">Terms and Conditions</li>
          <li className="win">Privacy Policy</li>
          </ul>

        </div>
        </div>
    )
}
export default Home