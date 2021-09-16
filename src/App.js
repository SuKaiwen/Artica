import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Products from './Components/Products';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';

import React, {useState, useEffect} from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const[cart, setCart] = useState([]);

  return (
    <Router>
        <div className="App">
          <Header cart = {cart}/>
          <Switch>
            <Route path="/cart">
                <Cart cart = {cart} setCart = {setCart}/>
            </Route>
            <Route path="/aboutus">
                <AboutUs />
            </Route>
            <Route path="/products">
                <Products cart = {cart} setCart = {setCart}/>
            </Route>
            <Route path="/">
                <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
