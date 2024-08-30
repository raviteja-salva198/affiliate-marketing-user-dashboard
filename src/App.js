import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/user/Home/Home';
import BillingInfoForm from './components/user/BillingInfoForm/BillingInfoForm';
import ProductList from './components/user/ProductsList/ProductsList';
import MarketingStatusDashboard from './components/user/MarketingStatusDashboard/MarketingStatus';
import Header from './components/global/Header';
import {MainContent, AppContainer} from './App.styles';

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/billing" element={<BillingInfoForm />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/marketing" element={<MarketingStatusDashboard />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
};

export default App;
