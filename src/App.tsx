import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Routing from './routes';

function App() {
  return (
      <div className=''>
        <Routing>
        <Header />

        <Footer />
        </Routing>
      </div>
  );
}

export default App;
