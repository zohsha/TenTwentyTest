import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss';
import Navbar from './components/Navbar';
import SplitSlider from './components/SplitSlider';
import VerticalSlider from './components/VerticalSlider';

const App = () => (
  <div>
    <Navbar />
    <SplitSlider />
    <VerticalSlider />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
