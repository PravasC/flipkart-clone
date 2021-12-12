import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch } from 'react-router';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import LoginPage from './components/LoginPage/LoginPage';
import ViewCart from './components/ViewCart/ViewCart';
import ProductDetailes from './components/Product/ProductDetailes';
import ProductAdd from './components/AdminPenel/ProductAdd';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" >
        <HomePage />
      </Route>
      <Route exact path="/signup">
        <SignUpPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/viewcart">
        <ViewCart />
      </Route>
      <Route exact path="/product/:productId">
        <ProductDetailes />
      </Route>
      <Route exact path="/adminpenelgo">
        <ProductAdd />
      </Route>
    </Switch>
    
    </>
  );
}

export default App;
