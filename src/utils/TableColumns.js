import React from 'react';

const baseColumns = [
    { title: 'Title', dataIndex: 'title', key: 'title', width: 150 },
    { title: 'Brand', dataIndex: 'brand', key: 'brand', width: 150 },
    { title: 'Category', dataIndex: 'category', key: 'category', width: 150 },
    { title: 'Price', dataIndex: 'price', key: 'price', width: 150 },
    { title: 'Percentage', dataIndex: 'discountPercentage', key: 'discountPercentage', width: 150 },
    {
      title: 'Image',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      width: 150,
      render: (text) => (
        <img src={text} alt="Product" style={{ width: 50, height: 50, objectFit: 'cover' }} />
      ),
    },
];

export const getTableColumns = ({ isMainTable = false, isModal = false, removeProduct }) => {
  let columns = [...baseColumns];

  if (isMainTable) {
    columns.push({
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: 250,
    });
    columns = columns.map(col => col.dataIndex === 'title' ? { ...col, sorter: (a, b) => a.title.localeCompare(b.title) } : col);
    columns = columns.map(col => col.dataIndex === 'price' ? { ...col, sorter: (a, b) => a.price - b.price } : col);
  }

  if (removeProduct) {
    columns.push({
      title: 'Action',
      key: 'action',
      width: 150,
      render: (text, record) => (
        <button onClick={() => removeProduct(record)}>Remove</button>
      ),
    });
  }

  return columns;
};
