import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import OrderScreen from "./Screens/OrderScreen";
import UserListScreen from "./Screens/UserListScreen";
import UserEditScreen from "./Screens/UserEditScreen";
import ProductListScreen from "./Screens/ProductListScreen";
import ProductEditScreen from "./Screens/ProductEditScreen";
import OrderListScreen from "./Screens/OrderListScreen";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/login" component={LoginScreen} />
      <Route path="/shipping" component={ShippingScreen} />
      <Route path="/payment" component={PaymentScreen} />
      <Route path="/placeorder" component={PlaceOrderScreen} />
      <Route path="/orderlist" component={OrderListScreen} />
      <Route path="/order/:id" component={OrderScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/profile" component={ProfileScreen} />
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/cart/:id?" component={CartScreen} />
      <Route path="/admin/userlist" component={UserListScreen} />
      <Route path="/admin/productlist" component={ProductListScreen} exact />
      <Route
        path="/admin/productlist/:pageNumber"
        component={ProductListScreen}
        exact
      />
      <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
      <Route path="/admin/user/:id/edit" component={UserEditScreen} />
      <Route path="/search/:keyword" component={HomeScreen} exact />
      <Route path="/page/:pageNumber" component={HomeScreen} exact />
      <Route
        path="/search/:keyword/page/:pageNumber"
        component={HomeScreen}
        exact
      />
      <Route path="/" component={HomeScreen} exact />

      <Footer />
    </Router>
  );
}

export default App;
