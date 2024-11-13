import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import store from "./store";
import LogIn from "./pages/LogIn";
import Blogs from "./pages/Blogs";
import Checkout from "./pages/Checkout";
import ScrollToTop from "./Components/ScrollToTop";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
