import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home.js";
import Services from "./Pages/Home/Services/Services.js";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage.js";
import Header from "./Pages/Shared/Header/Header.js";
import AboutUs from "./Pages/AboutUs/AboutUs.js";
import Login from "./Pages/Login/Login.js";
import Footer from "./Pages/Shared/Footer/Footer.js";
import SignUp from "./Pages/Signup/Signup.js";
import AuthProvider from "./Pages/context/AuthProvider.js";
import Contact from "./Pages/Contact/Contact.js";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute.js";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails.js";
import AddService from "./Pages/Order/AddService/AddService.js";
import MyOrder from "./Pages/Order/MyOrder/MyOrder.js";
import ManageOrder from "./Pages/Order/ManageOrder/ManageOrder.js";
import Locations from "./Pages/Locations/Locations.js";
import Blog from "./Pages/Blog/Blog.js";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/locations">
              <Locations></Locations>
            </Route>

            <PrivateRoute path="/services/:id">
              <ServiceDetails />
            </PrivateRoute>

            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>

            <Route path="/blog">
              <Blog></Blog>
            </Route>

            <Route path="/addservice">
              <AddService></AddService>
            </Route>

            <Route path="/myorder">
              <MyOrder></MyOrder>
            </Route>

            <Route path="/manageorder">
              <ManageOrder></ManageOrder>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/signup">
              <SignUp></SignUp>
            </Route>

            <Route path="*">
              <NotFoundPage></NotFoundPage>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
