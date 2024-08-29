import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CompareProductsPage from './pages/CompareProductsPage';
import { PATH } from './constants';

const MainContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  margin-left: 250px;
  padding: 20px;
  flex: 1;
`;

const AppRoutes = () => (
  <BrowserRouter>
    <MainContainer>
        <Navbar />
        <Sidebar />
      <Content>
        <Routes>
          <Route path={PATH.PRODUCTS_DETAILS} element={<ProductDetailsPage />} />
          <Route path={PATH.COMPARE_PRODUCTS} element={<CompareProductsPage />} />
        </Routes>
      </Content>
    </MainContainer>
  </BrowserRouter>
);

export default AppRoutes;

