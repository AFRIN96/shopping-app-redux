import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import Wishlist from "./components/Wishlist/Wishlist";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exaact path="/cart" element={<Cart />} />
          <Route exaact path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
