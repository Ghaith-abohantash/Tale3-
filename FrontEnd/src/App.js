import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signuppage from './pages/signuppage';
import Loginpage from './pages/loginpage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </Router>
  );
};

export default App;
