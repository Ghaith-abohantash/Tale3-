import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signuppage from './pages/signuppage';
import Loginpage from './pages/loginpage';
import Evaluation from './components/Evaluation/evaluation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/evaluation" element ={<Evaluation/>}/>
      </Routes>
    </Router>
  );
};

export default App;
