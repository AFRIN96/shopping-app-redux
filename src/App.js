import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import Wishlist from "./components/Wishlist/Wishlist";
import SearchBar from "./components/Products/SearchBar/SearchBar";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes className="App-header">
          <Route exact path="/" element={<Products />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
