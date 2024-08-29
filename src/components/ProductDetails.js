import React, { useState, useEffect } from 'react';
import { Table, Button, message, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getProducts } from '../services/productService';
import { getTableColumns } from '../utils/TableColumns';
import { TEXTS, PATH } from '../constants';

const CompareButton = styled(Button)`
  background-color: #1890ff;
  color: white;
  border: none;
  margin-top: 10px;
  &:disabled {
    background-color: #d9d9d9;
    cursor: not-allowed;
  }
`;

const Spinner = styled(Spin)`
  .ant-spin-dot-item {
    background-color: #0d2ff2;
  }
`;

const Load = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    fetchProducts();
  }, []);

  const columns = getTableColumns({ isMainTable: true });

  const handleCompare = () => {
    if (selectedRowKeys.length < 2) {
      message.error(TEXTS.WarnMessage);
      return;
    }
    const selectedProducts = products.filter((product) =>
      selectedRowKeys.includes(product.id)
    );
    navigate(PATH.COMPARE_PRODUCTS, { state: { selectedProducts } });
  };

  
  if (loading) {
    return (
      <Load>
        <Spinner size="large" />
      </Load>
    );
  }

  return (
    <div style={{ marginTop: 60 }}>
      <h1>Product Details</h1>
      <Table
        rowSelection={{
          type: 'checkbox',
          selectedRowKeys,
          onChange: setSelectedRowKeys,
        }}
        columns={columns}
        dataSource={products}
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />
      <CompareButton
        onClick={handleCompare}
      >
        Compare
      </CompareButton>
    </div>
  );
};

export default ProductDetails;
