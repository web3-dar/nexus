import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import 'animate.css';
import LoginForm from './pages/login';
import Confirmation from './pages/confirmation';
import Dashboard from './pages/dashboard';
import PaymentPage from './components/payment';
import DepositsPage from './components/deposit';
import LoanPage from './components/loan';


const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/pin" element={<Confirmation />} />
          <Route path="/overview" element={<PaymentPage />} />
          <Route path="/deposit" element={<DepositsPage />} />
          <Route path="/loan" element={<LoanPage />} />
          
          
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
