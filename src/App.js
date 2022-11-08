import "./App.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import { Home } from "./Pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserList } from "./Pages/UserList";
import { User } from "./Pages/User";
import { Newuser } from "./Pages/Newuser";
import { Productlist } from "./Pages/Productlist";
import { Product } from "./Pages/Product";
import { NewProduct } from "./Pages/NewProduct";
import { Login } from "./Pages/login";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext/Authcontext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
        {user ? (
          <>
            <Topbar />
            <div className="App__container">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<UserList />} />
                <Route path="/user/:userId" element={<User />} />
                <Route path="/newUser" element={<Newuser />} />
                <Route path="/movies" element={<Productlist />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/newMovies" element={<NewProduct />} />
              </Routes>
            </div>
          </>
        ) : (
          <Navigate to="/login" />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
