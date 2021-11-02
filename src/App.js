import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import { apiUrl } from "./utils/api";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const data = await axios.get(`${apiUrl}products`);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          {data ? (
            <div className="content">
              <Navbar />
              <Switch>
                <Route exact path="/" render={() => <Home data={data} />} />
                <Route exact path="/cart" component={Cart}></Route>
                <Route
                  exact
                  path="/edit/:id"
                  render={() => <EditProducts data={data} />}
                />
                <Route exact path="/favorites" component={Favorites} />
                <Route exact path="/add" component={AddProducts}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route
                  exact
                  path="/products"
                  render={() => <Products data={data} />}
                />
                <Route
                  exact
                  path="/details/:id"
                  component={ProductDetails}
                ></Route>
                <Route exact path="*" component={PageNotFound}></Route>
              </Switch>
              <Footer />
            </div>
          ) : null}
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
