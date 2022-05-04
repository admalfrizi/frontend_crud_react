import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import Navbar from './component/Navbar';
import RoutingScreen from './component/RoutingScreen';

function App() {
  return (
    <Router>
      <Navbar />
      <RoutingScreen />
    </Router>
  );
}

export default App;
