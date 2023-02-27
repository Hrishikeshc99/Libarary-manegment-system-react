// import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import Example from "../Example";
// import EditRow from "./EditRow";
// import Edit from "../Editdata";

const ReadRow = ({
  contact,
  handleEditClick,
  handleDeleteClick,
}) => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);

  // useEffect(() => {
  //   handleClose();
  // }, [contact]);

  // const handleShow = () => setShow(true);
  return (

    <tr>
      <td>{contact.SrNo}</td>
      <td>{contact.BookName}</td>
      <td>{contact.Author}</td>
      <td>{contact.Pages}</td>
      <td>{contact.Category}</td>
      <td>
        <button
          class="btn btn-outline-info"
          type="button"
          // onClick={handleShow}
          onClick={(e) => handleEditClick(e, contact)}
        >
          Edit
        </button>
        <button
          class="btn btn-outline-danger"
          type="button"
          onClick={() => handleDeleteClick(contact.id)}
        >
          Delete
        </button>
        {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
         
            <Example theContact={contact} />
          </Modal.Body>
          <Modal.Footer>
            
          </Modal.Footer>
        </Modal> */}
      </td>
    </tr>
  );
};

export default ReadRow;
