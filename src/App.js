import React from 'react';

import { About, Footer, Header, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Footer />
  </div>
);

export default App;
