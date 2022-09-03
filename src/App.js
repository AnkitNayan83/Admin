import "./App.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import { Home } from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserList } from "./Pages/UserList";
import { User } from "./Pages/User";
import { Newuser } from "./Pages/Newuser";
import { Productlist } from "./Pages/Productlist";
import { Product } from "./Pages/Product";
import { NewProduct } from "./Pages/NewProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar />
        <div className="App__container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<Newuser />} />
            <Route path="/products" element={<Productlist />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newProduct" element={<NewProduct />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
