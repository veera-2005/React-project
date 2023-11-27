import React from 'react'
import '../Assets/CSS/Outpage.css'
import { useNavigate } from 'react-router-dom'
const Outpage = () => {
  const navi=useNavigate()
  const setnavi = () =>
  {
    navi('/Payment')
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
    navi('/DF');
  }

  return (
    <div className='allo'>
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
      <div className='fullo'>
                <div className='donateo'>
                  <table className='tabo'>
                    <tr>
                      
                        <h>Donate</h>
                      </tr>
                      <tr>

                       <div className='gree'>
                        <span></span>
                        <div className='imgdd'></div>
                       </div>
                      
                      </tr>
                      
                  
                    <tr>
                      <button className='donooo' onClick={setnavi}>Donate now</button>
                    </tr>
                    <tr>
                      <p>Card, Netbamking, Cheque pickups</p>
                    </tr>
                     <tr>
                        <div className='hro'>
                          <u>
                            <p>Or Donating using </p>
                            </u>
                          </div>
                      </tr>
                  </table>
              </div>
                  {/* <hr> Or Donating using </hr> */}
                  <div className='pico'>
                      <div className='imgo'>
                      </div>
                      <p>
                          Scan & donate with any app
                      </p>
                      </div>

                  <div className='lasto'>
                      
                  </div>
                  </div>
      </div>
  )
}

export default Outpage