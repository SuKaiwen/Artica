import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Products from './Components/Products';
import Footer from './Components/Footer';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/cart">
                <Cart />
            </Route>
            <Route path="/products">
                <Products />
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
