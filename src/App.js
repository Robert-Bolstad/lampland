import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import EditProducts from "./pages/EditProducts";
import Favorites from "./pages/Favorites";
import AddProducts from "./pages/AddProducts";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/edit" component={EditProducts}></Route>
            <Route path="/favorites" component={Favorites}></Route>
            <Route path="/add" component={AddProducts}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/products" component={Products}></Route>
            <Route path="/details" component={ProductDetails}></Route>
            <Route path="*" component={PageNotFound}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
