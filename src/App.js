import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
// import CheckoutCard from './components/CheckoutCard';
import CheckoutPage from './components/CheckoutPage';
import Products from './components/Products';
// import Product from './components/Product';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/checkout-page">
            <CheckoutPage/>
          </Route>
          <Route path="/">
            <Products/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
