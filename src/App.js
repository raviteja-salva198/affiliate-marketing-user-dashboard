import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BillingInfoForm from './components/user/BillingInfoForm/billing-info-form';
import AdminDashboard from './components/admin/AdminDashboard/admin-dashboard';
import Header from './components/global/Header';
import Footer from './components/global/Footer';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
        <Route path="/" element={<BillingInfoForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
