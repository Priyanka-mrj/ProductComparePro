import React from 'react';
import { Layout, Avatar } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;

const StyledHeader = styled(Header)`
  position: fixed;
  width: 100%;
  z-index: 1;
  background: #001529;
`;

const Logo = styled.div`
  float: left;
  color: #fff;
  font-size: 20px;
`;

const Navbar = () => (
  <StyledHeader>
    <Logo>KycHub</Logo>
    <div style={{ float: 'right', marginRight: 80 }}>
      <Avatar src="https://via.placeholder.com/150" />
    </div>
  </StyledHeader>
);

export default Navbar;
