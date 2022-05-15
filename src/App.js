import React from 'react';
import { Navbar } from './Navbar/Navbar';
import {Banner} from './Banner/banner';
import {GlobalStyle} from './Styles/GlobalStyle';

function App() {

  
  return (
   <>
   <GlobalStyle/>
      <Navbar />
      <Banner />
   </>
  );
}

export default App;
