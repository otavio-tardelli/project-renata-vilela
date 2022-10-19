import React from 'react';
import Header from './components/Header';
import SobreMim from './components/SobreMim';
import Espaco from './components/Espaco';
import Procedimentos from './components/Procedimentos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import '../src/style/App.css';

function App() {
  return (
    <div>
      <Header />
      <SobreMim />
      <Espaco />
      <Procedimentos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
