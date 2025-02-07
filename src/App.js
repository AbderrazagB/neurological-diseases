import React from 'react';
import Navbar from './components/Navbar';
import MultipleSclerosis from './pages/MultipleSclerosis';
import Stroke from './pages/Stroke';
import Alzheimers from './pages/Alzheimers';
import Parkinsons from './pages/Parkinsons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  return (
    <div>
      <Navbar />
      <MultipleSclerosis />
      <Stroke />
      <Alzheimers />
      <Parkinsons />
    </div>
  );
}

export default App;