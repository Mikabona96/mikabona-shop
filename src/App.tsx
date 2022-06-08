import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Routing from './routes';

function App() {
  return (
    <div className=''>
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
