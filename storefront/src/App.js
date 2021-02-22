import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Product from "./Components/Product";

function App() {
  return (
    <>
      <Header />
      <Footer />
      <Product
        img={"/images/airpods.jpg"}
        name={"Airpods"}
        price={99.99}
        rating={4}
        numReviews={23}
      />
    </>
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
