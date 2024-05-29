import React, { useEffect } from 'react';
import { Modal, Form, Input } from 'antd';

const SupplierForm = ({ visible, onClose, onSubmit, supplier }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (supplier) {
      form.setFieldsValue(supplier);
    } else {
      form.resetFields();
    }
  }, [supplier, form]);

  const handleSubmit = () => {
    form.validateFields().then(values => {
      onSubmit({ ...values, id: supplier ? supplier.id : Date.now() });
      onClose();
    });
  };

  return (
    <Modal
      visible={visible}
      title={supplier ? "Editar Fornecedor" : "Cadastrar Fornecedor"}
      onCancel={onClose}
      onOk={handleSubmit}
    >
      <Form form={form} layout="vertical">
        <Form.Item name="name" label="Nome" rules={[{ required: true, message: 'Por favor, insira o nome do fornecedor' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Por favor, insira o email do fornecedor' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Telefone" rules={[{ required: true, message: 'Por favor, insira o telefone do fornecedor' }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SupplierForm;

