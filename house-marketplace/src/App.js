import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import Category from "./pages/Category";
import CreateListing from "./pages/CreateListing";
import Listing from "./pages/Listing";
import Contact from "./pages/Contact";
import EditListing from "./pages/EditListing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore></Explore>}></Route>
          <Route path="/offers" element={<Offers></Offers>}></Route>
          <Route path="/category/:categoryName" element={<Category></Category>}></Route>
          <Route
            path="/forgot-password"
            element={<ForgotPassword></ForgotPassword>}
          ></Route>
          <Route pasth="/profile" element={<PrivateRoute></PrivateRoute>}>
            <Route path="/profile" element={<Profile></Profile>}></Route>
          </Route>
          <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
          <Route path="/create-listing" element={<CreateListing></CreateListing>}></Route>
          <Route path="/edit-listing/:listingId" element={<EditListing></EditListing>}></Route>
          <Route path="/category/:categoryName/:listingId" element={<Listing></Listing>}></Route>
          <Route path="/contact/:landlordId" element={<Contact></Contact>}></Route>
        </Routes>
        <Navbar></Navbar>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
