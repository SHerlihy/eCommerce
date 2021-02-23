import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./Components/Screens/HomeScreen";
import ProductScreen from "./Components/Screens/ProductScreen";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomeScreen} exact />
      <Route path="/product/:id" component={ProductScreen} />
      <Footer />
    </Router>
  );
}

// _id: '1',
// name: 'Airpods Wireless Bluetooth Headphones',
// image: '/images/airpods.jpg',
// description:
//   'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
// brand: 'Apple',
// category: 'Electronics',
// price: 89.99,
// countInStock: 10,
// rating: 4.5,
// numReviews: 12,

export default App;
