import React, { useState } from "react";
import { Modal } from "antd";

const App = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(props.status);

  const handle = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={props.status}
        onOk={handle}
        onCancel={handle}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default App;
