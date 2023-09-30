
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
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Cards from './component/Cards/Cards';
import Detail from './component/Detail/Detail'

function App() {
  

  return (
    
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/home' element={<Cards/>}/>
        <Route path='/diver/:id' element={<Detail/>}/>
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </>
  );
}

export default App
