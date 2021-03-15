import { Form, Input, Button, Modal } from "antd";
import React, { useState } from "react";

function App() {
  const [status, setStatus] = useState(false);

  const onFinish = (e) => {
    fetch("https://localhost:44353/api/User", {
      method: "POST",
      body: JSON.stringify(e),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setStatus(data));
  };

  const handle = () => setStatus(false);

  return (
    <div className="container">
      <Modal
        title="Basic Modal"
        visible={status}
        onOk={handle}
        onCancel={handle}
      >
        Login Success!
      </Modal>
      <Form className="mainForm" onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
