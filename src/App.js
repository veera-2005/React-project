import React from 'react'
// // import Outpage from './Components/Main/Outpage'
// import Payment from './Components/Main/Payment'
// import Project from './ReactMainPage/Project'
// import DF from './Components/Main/DF'
import DF from './Components/DF'
// import Outpage from './Components/Main/Outpage'
import {SignIn} from './Components/SignIn';
import {Routes ,Route } from 'react-router-dom';
import Details from './Components/Details';
import Outpage from './Components/Outpage';
import Payment from './Components/Payment';
import Download from './Components/Download';
import Openappd from './Components/Openappd';
import Pic from './Components/Pic';
import About from './Components/About';
import Home from './Components/Home';
import  Login111 from './Components/Login111';
const App = () => {
  return (
    <div>
      {/* <Payment/> */}
      <Routes>
        <Route path='/' element={<DF />}/>
        <Route path='/DF' element={<DF />}/>
        <Route path='/SignIn' element={<SignIn />}/>
        <Route path='/Details' element={<Details />}/>
        <Route path='/SignIn' element={<SignIn />}/>
        <Route path='/Outpage' element={<Outpage />}/>
        <Route path='/Payment' element={<Payment />}/>
        <Route path='/Download' element={<Download />}/>
        <Route path='/Openappd' element={<Openappd/>}/>
        <Route path='/Pic' element={<Pic/>}/>
        <Route path='/About' element={<About/>}/> 
        <Route path='/Home' element={<Home/>}/> 
        <Route path='/Login111' element={<Login111/>}/> 
       </Routes>
        {/* <About/> */}
    </div>
  )
}

export default App

// import React from 'react'
// // import Home from './Components/Home'
// import Login111 from './Components/Login111'
// const App = () => {
//   return (
//     <div>
//       <Login111/>
//     </div>
//   )
// }

// export default App