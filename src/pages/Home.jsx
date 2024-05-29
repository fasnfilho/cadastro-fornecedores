import React, { useState } from 'react';
import { Button } from 'antd';
import SupplierForm from '../components/SupplierForm';
import SupplierList from '../components/SupplierList';
import './Home.css'; 

const Home = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [editingSupplier, setEditingSupplier] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addSupplier = (supplier) => {
    setSuppliers([...suppliers, supplier]);
  };

  const updateSupplier = (updatedSupplier) => {
    setSuppliers(suppliers.map(supplier => supplier.id === updatedSupplier.id ? updatedSupplier : supplier));
  };

  const deleteSupplier = (id) => {
    setSuppliers(suppliers.filter(supplier => supplier.id !== id));
  };

  const openModal = (supplier = null) => {
    setEditingSupplier(supplier);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setEditingSupplier(null);
  };

  return (
    <div className="home-container">
      <Button type="primary" onClick={() => openModal()}>Cadastrar Fornecedor</Button>
      <SupplierList
        suppliers={suppliers}
        onEdit={openModal}
        onDelete={deleteSupplier}
      />
      <SupplierForm
        visible={isModalVisible}
        onClose={closeModal}
        onSubmit={editingSupplier ? updateSupplier : addSupplier}
        supplier={editingSupplier}
      />
    </div>
  );
};

export default Home;

