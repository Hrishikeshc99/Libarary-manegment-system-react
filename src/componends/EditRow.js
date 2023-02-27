import React from 'react';
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { useState } from "react";

const EditRow = ({editFormData,handleEditFormChange, handleCancelClick}) => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <>
    
    <tr>
      <td>
        <input
          type="number" 
          required="required"
          placeholder="Enter No.."
          name="SrNo"
          value={editFormData.SrNo}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Bookname.."
          name="BookName"
          value={editFormData.BookName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Author.."
          name="Author"
          value={editFormData.Author}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Enter PNo.."
          name="Pages"
          value={editFormData.Pages}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Category.."
          name="Category"
          value={editFormData.Category}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button class="btn btn-success" type="submit">
          Save
        </button>
        <button
          class="btn btn-success"
          type="button"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
    </>
  );
}

export default EditRow;
