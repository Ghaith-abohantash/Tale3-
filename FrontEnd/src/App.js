import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signuppage from './pages/signuppage';
import Loginpage from './pages/loginpage';
import Schedulepage from './pages/schedulepage';
import Adminpage from './pages/Adminpage';
import Homep from './pages/home';
import Updatepage from './pages/updatepage';

import Aboutuspage from './pages/Aboutuspage';
import Bookingpage from './pages/booking';


import PrivateRoute from './components/Privateroute'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/" element={<Homep />} />
        <Route path="/schedule" element={<PrivateRoute element={Schedulepage} />} />
        <Route path="/admin" element={<PrivateRoute element={Adminpage} adminRoute />} />
        <Route path="/about" element={<Aboutuspage />} />
        <Route path="/update" element={<Updatepage />} />
        <Route path="/booking" element={<Bookingpage />} />



      </Routes>
    </Router>
  );
};

export default App;
