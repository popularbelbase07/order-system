import React from 'react';
import { Navbar } from './Navbar/Navbar';
import {Banner} from './Banner/banner';
import {GlobalStyle} from './Styles/GlobalStyle';
import { Menu } from './Menu/menu';

function App() {


  return (
   <>
   <GlobalStyle/>
      <Navbar />
      <Banner />
      <Menu />
   </>
  );
}

export default App;
