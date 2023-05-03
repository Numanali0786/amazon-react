import "./App.css";
import "./Home.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Login from "./Login";
import { useEffect } from "react";
import { useAppContext } from "./context/Context";
// import { useUserContext } from "./context/userContext";

function App() {
  const { user, dispatch } = useAppContext();
  useEffect(() => {
    dispatch({ type: "LOGIN", payload: localStorage.getItem("user") });
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        {user && <Header />}
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="/cart" element={user && <Cart />} />
          <Route path="/login" element={!user && <Login />} />
        </Routes>
      </BrowserRouter>

      {/* <Home /> */}
    </div>
  );
}

export default App;
