import React,{useState, useEffect} from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Addform =({editFormData,handleEditFormChange, handleCancelClick})=>{
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
    return (
      <>
        <Button
          // class="btn btn-success"
          class="btn btn-primary block w20 col-mt-2"
          // id="right-panel-link"
          variant="primary"
          onClick={handleShow}
        >
          Add Book
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Fill Book Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="number"
              required="required"
              placeholder="Enter No.."
              name="SrNo"
              value={editFormData.SrNo}
              onChange={handleEditFormChange}
            ></input>

            <input
              type="text"
              required="required"
              placeholder="Enter Bookname.."
              name="BookName"
              value={editFormData.BookName}
              onChange={handleEditFormChange}
            ></input>

            <input
              type="text"
              required="required"
              placeholder="Enter Author.."
              name="Author"
              value={editFormData.Author}
              onChange={handleEditFormChange}
            ></input>

            <input
              type="number"
              required="required"
              placeholder="Enter PNo.."
              name="Pages"
              value={editFormData.Pages}
              onChange={handleEditFormChange}
            ></input>

            <input
              type="text"
              required="required"
              placeholder="Enter Category.."
              name="Category"
              value={editFormData.Category}
              onChange={handleEditFormChange}
            ></input>

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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
export default Addform;