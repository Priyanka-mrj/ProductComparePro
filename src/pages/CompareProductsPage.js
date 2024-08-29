import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CompareProducts from '../components/CompareProducts';
import AddMoreProductsModal from '../components/AddMoreProductsModal';
import { getProducts } from '../services/productService';

const CompareProductsPage = () => {
  const location = useLocation();
  const [selectedProducts, setSelectedProducts] = useState(location.state?.selectedProducts || []);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      // Initially remove products that were already selected on the ProductDetails page
      const initialProducts = data.filter(product => !selectedProducts.some(p => p.id === product.id));
      setAllProducts(initialProducts);
    };
    fetchProducts();
  }, [selectedProducts]);

  const removeProduct = (product) => {
    setSelectedProducts(selectedProducts.filter((item) => item.id !== product.id));
    setAllProducts((prevProducts) => [...prevProducts, product]);
  };

  const handleAddProducts = (products) => {
    setSelectedProducts([...selectedProducts, ...products]);
    setAllProducts((prevProducts) =>
      prevProducts.filter(product => !products.some(p => p.id === product.id))
    );
  };

  return (
    <>
      <CompareProducts
        selectedProducts={selectedProducts}
        removeProduct={removeProduct}
        setIsModalVisible={setIsModalVisible}
      />
      {isModalVisible && (
        <AddMoreProductsModal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          allProducts={allProducts}
          onAddProducts={handleAddProducts}
          selectedProducts={selectedProducts}
        />
      )}
    </>
  );
};

export default CompareProductsPage;
