import styled from 'styled-components';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { PATH } from '../constants';

const StyledMenu = styled(Menu)`
  position: fixed;
  background-color: #5d5d5d;
  border: none;
  height: 100%;
  padding: 20px;
  margin-top: 60px;
  margin-left: 0px;
  width: 250px;
`;

const StyledMenuItem = styled(Menu.Item)`
  background-color: #e1e1e1;
  color: #fff;
  border-radius: 4px;

  &:hover {
    background-color: #1890ff;
    color: #fff;
  }

  &.ant-menu-item-selected {
    background-color: #1890ff;
    color: #fff;
  }
`;

const SidebarMenu = () => (
  <StyledMenu mode="vertical" defaultSelectedKeys={['1']}>
    <StyledMenuItem key="1">
      <Link to={PATH.PRODUCTS_DETAILS} style={{ color: 'inherit', textDecoration: 'none' }}>
        Product Details
      </Link>
    </StyledMenuItem>
    <StyledMenuItem key="2">
      <Link to={PATH.COMPARE_PRODUCTS} style={{ color: 'inherit', textDecoration: 'none' }}>
        Compare Products
      </Link>
    </StyledMenuItem>
  </StyledMenu>
);

export default SidebarMenu;
