import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import "./ModalBasic.scss";

//
export function ModalBasic(props) {
  const { show, size, title, children, onClose } = props;

  return (
    <Modal className="modal-basic" open={show} onClose={onClose} size={size}>
      {title && <Modal.Header>{title}</Modal.Header>}
      <Modal.Content>{children}</Modal.Content>
    </Modal>


  );
}

ModalBasic.defaultProps = {
  size: "tiny",
};