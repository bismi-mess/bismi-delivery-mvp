import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/Main';
import Sidebar from './components/Aside';
import Footer from './components/Footer';
import LocationPage from './components/location/locationMain';
import AccountsPage from './components/accounts/accounts';
import LoginPage from './components/login/login';
import UserDetailsPage from './components/orders/addorder';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/home" element={<MainContent />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/orders" element={<UserDetailsPage />} />
            <Route path="/accounts" element={<AccountsPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
