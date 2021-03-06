// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap-grid.min.css";

import Signup from './components/Signup';
import Login from './components/Login';
import Search from './components/search';
import Logout from './components/logout';
import Ads from './components/ads';
import Home2 from './components/home2'

// import About from './components/about';
import HomePage from './components/home';
import MyRide from './components/myRide';
import RideDetails from './components/rideDetails';
import Home1 from "./components/home1";
import MyRequest from './components/request';


import SendRequest from './components/sendrequest';
import  Update from './components/update'
import Profile from './components/profile'



import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
   <Router>
    {/* <Home1/> */}
     <Routes>
         

            <Route path="/home" exact element={<Home1/>}/>
            <Route path="/" exact element={<Home2/>}/>
            <Route path="/login" exact element={<Login/>}/>
            <Route path ="/SignUp" exact element={<Signup/>}/>
            <Route path ="/addFlight" exact element={<RideDetails/>}/>
            <Route path ="/ads" exact element ={<Ads/>} />
            {/* <Route path = '/search' exact element = {<Search/>}/> */}
            <Route path = '/logout' exact element ={<Logout/>}/>
            {/* <Route path = '/about' exact element= {<About/>} /> */}
            <Route path = '/myFlight' exact element = {<MyRide/>} />
            <Route path = '/request' exact element = {<MyRequest/>} />
            <Route path = '/update/:id' exact element = {<Update/>}/>
            <Route path = '/profile' exact element = {<Profile/>}/>
            <Route path = '/sendrequest' exact element = {<SendRequest/>}/>
     






    </Routes>
    </Router>
  

  );
}

export default App;
