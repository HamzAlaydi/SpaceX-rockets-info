import { Button, Modal } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModalFalse } from "../../utils/redux/actions/modalAction";
import { useQueryModal } from "../../utils/hooks/useQueryModal";

const ModalC = () => {
  //constance's
  const { view } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const { info, isLoading, error, refetch } = useQueryModal();

  //functions
  const handleOk = () => {
    dispatch(setModalFalse());
  };

  const handleCancel = () => {
    dispatch(setModalFalse());
  };

  if (error) {
    return <h1>error</h1>;
  }
  if (isLoading) {
    return <h2>loading...</h2>;
  }

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={view}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
};

export default ModalC;
