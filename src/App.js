
import React from 'react';
// import  './Styles/Header.css';
import About from './components/About';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='' element={ <Home />}/>
    
          <Route exact path='/About' element={<About />}/>
          <Route exact path='/Contact' element={<Contact />}/>
          
        </Routes>
       
      </BrowserRouter>
       <Footer /> 
      
    </div>
  );
}

export default App;



