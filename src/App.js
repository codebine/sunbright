import React from 'react'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Footer from './Pages/Footer'
import Header from './Pages/Header'
import Services  from './Pages/Services'
import Home  from './Pages/Home'
import Aboutus from './Pages/Aboutus'
import Contactus from './Pages/Contactus'
import Careers from './Pages/Careers'
import Industries from './Pages/Industries'




const App = () => {
  return (
    <div>.
      <BrowserRouter basename='/sunbrightsoftwaresolutions'>
      <Header />
      <Routes >
       <Route path='/sunbrightsoftwaresolutions' element={<Home/>}></Route>
       <Route path='/Services' element={<Services/>}></Route>
       <Route path='/Aboutus' element={<Aboutus/>}></Route>
       <Route path='/Contactus' element={<Contactus/>}></Route>
       <Route path='/Careers' element={<Careers/>}></Route>
       <Route path='/Industries' element={<Industries/>}></Route>
       <Route path='*'element={<Home/>}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App