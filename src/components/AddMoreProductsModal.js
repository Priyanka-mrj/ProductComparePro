import React, { useState, useEffect } from 'react';
import { Modal, Table, message } from 'antd';
import { getTableColumns } from '../utils/TableColumns';
import { TEXTS, BUTTON_TEXTS } from '../constants';

const AddMoreProductsModal = ({ visible, onClose, allProducts, onAddProducts, selectedProducts }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    setSelectedRowKeys([]);
  }, [allProducts]);

  const handleAdd = () => {
    if (selectedRowKeys.length > 4) {
      message.error(TEXTS.ErrorMessage);
      return;
    }

    const selectedProductsToAdd = allProducts.filter((product) =>
      selectedRowKeys.includes(product.id)
    );

    message.success(TEXTS.SuccessMessage);

    onAddProducts(selectedProductsToAdd);
    onClose();
  };

  const modalColumns = getTableColumns({ isModal: true });
  return (
    <Modal
      title={TEXTS.title}
      visible={visible}
      onCancel={onClose}
      onOk={handleAdd}
      okText={BUTTON_TEXTS.add}
      width={800}
    >
      <Table
        rowSelection={{
          selectedRowKeys,
          onChange: setSelectedRowKeys,
          getCheckboxProps: (record) => ({
            disabled: selectedRowKeys.length >= 4 && !selectedRowKeys.includes(record.id),
          }),
        }}
        columns={modalColumns}
        dataSource={allProducts}
        rowKey="id"
      />
    </Modal>
  );
};

export default AddMoreProductsModal;
