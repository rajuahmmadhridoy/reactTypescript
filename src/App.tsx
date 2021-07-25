import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Component/Home/Home/Home';
import ProductDetail from './Component/Home/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
           <Route exact path='/' children={<Home />} />
           <Route exact path='/product/:key' children={<ProductDetail />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
