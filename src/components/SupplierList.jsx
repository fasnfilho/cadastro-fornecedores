import React from 'react';
import { Table, Button, Space } from 'antd';
import './SupplierList.css';

const SupplierList = ({ suppliers, onEdit, onDelete }) => {
  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Telefone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Ações',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => onEdit(record)}>Editar</Button>
          <Button type="danger" onClick={() => onDelete(record.id)}>Excluir</Button>
        </Space>
      ),
    },
  ];

  return <Table dataSource={suppliers} columns={columns} rowKey="id" />;
};

export default SupplierList;

