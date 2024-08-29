import React, { useState } from 'react';
import AppRoutes from './routes';
import AddMoreProductsModal from './components/AddMoreProductsModal';

const App = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddProducts = (products) => {
    setSelectedProducts([...selectedProducts, ...products]);
  };

  return (
    <>
      <AppRoutes
        selectedProducts={selectedProducts}
        setIsModalVisible={setIsModalVisible}
      />
      <AddMoreProductsModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onAddProducts={handleAddProducts}
      />
    </>
  );
};

export default App;
