
// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'
// 
// 
// import Cards from './component/Cards/Cards'

// function App() {
//   return (
//       <div className='App'>
//        <Routes>
//          <Route path='/' element={<LandingPage/>}/>
//          <Route path='/cards' element={<Cards/>}/>
//        </Routes>
//       </div>
//   )
// }

// export default App
import LandingPage from './component/LandingPage/LandingPage'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

import Cards from './component/Cards/Cards';
 import Detail from './component/Detail/Detail'
 import Nav from './component/Nav/Nav';

function App() {
    
     const location = useLocation()

  return (
    <> 
      <div>
        {location.pathname === "/home" && <Nav />}
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/home' element={<Cards/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>  
    
      </Routes>
      
    </>
  );
}

export default App