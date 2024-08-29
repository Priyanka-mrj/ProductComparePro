import React from 'react';
import { Table, Button } from 'antd';
import { getTableColumns } from '../utils/TableColumns';
import { BUTTON_TEXTS } from '../constants';

const CompareProducts = ({ selectedProducts, removeProduct, setIsModalVisible }) => {
  const columns = getTableColumns({ removeProduct });

  return (
    <div style={{ marginTop: 60 }}>
      <h1>Compare Products</h1>
      <Table columns={columns} dataSource={selectedProducts} rowKey="id" />
      <Button type={BUTTON_TEXTS.type} onClick={() => setIsModalVisible(true)}>
        {BUTTON_TEXTS.more}
      </Button>
    </div>
  );
};

export default CompareProducts;
