import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home.js";
import Admin from "./Components/Admin/Admin"
import Footer from "./Components/Footer/Footer"
import CarDetail from "./Components/CarDetail/CarDetail";
import FindCar from "./Components/FindCar/FindCar";
import ContactUs from "./Components/ContactUs/ContactUs"
import SignIn from "./Components/AUTH/SignIn";
import CustomNavbar from "./Components/Navbar/Navbar";
import Register from "./Components/AUTH/Register";
import Profile from "./Components/Profile/Profile";
import PrivateRoute from "./Components/PrivateRoute";
import { useEffect } from "react";
import { getUser } from "./Redux/Actions/authAction";
import { useDispatch } from "react-redux";
import NotFound from "./Components/NotFound";

function App() {
  const token=localStorage.getItem("token")
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(getUser());
    }
  }, [token]);
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Admin" element={<Admin />} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/find-car" element={<FindCar />} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/product/:id" element={<CarDetail/>}/>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
       <Footer/>   
      
    </BrowserRouter>
   
  );
}

export default App;
