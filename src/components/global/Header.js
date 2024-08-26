import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #f8f9fa;
  padding: 20px;
  margin-bottom: 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <StyledLink to="/">Affiliate Billing</StyledLink>
        <StyledLink to="/admin">Admin Dashboard</StyledLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;