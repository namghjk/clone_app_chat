import { Form, Input, Modal } from "antd";
import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/AppProvider";
import { AuthContext } from "../../Context/AuthProvider";
import { addDocument } from "../../firebase/services";

export default function AddRoomModal() {
  const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
  const {
    user: { uid },
  } = useContext(AuthContext);
  const [form] = Form.useForm();

  const handleOk = () => {
    console.log({ formData: form.getFieldsValue() });
    addDocument("rooms", { ...form.getFieldsValue(), members: [uid] });

    form.resetFields();

    setIsAddRoomVisible(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsAddRoomVisible(false);
  };

  return (
    <div>
      <Modal
        title="Create room"
        visible={isAddRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Room Name" name="name">
            <Input placeholder="Text room name" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input.TextArea placeholder="Text description" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
