import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Example = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleEditFormSubmit,
  theContact,
  updateContact,
}) => {
  const id = theContact.id;

  const [SrNo, setSrNo] = useState(theContact.SrNo);
  const [BookName, setBookName] = useState(theContact.BookName);
  const [Author, setAuthor] = useState(theContact.Author);
  const [Pages, setPages] = useState(theContact.Pages);
  const [Category, setCategory] = useState(theContact.Category);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updatedContact = { id, SrNo, BookName, Author, Pages, Category };
  console.log(updatedContact)


  

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(id, updatedContact);
  };

  return (
    <>
      <form class="container" onSubmit={handleSubmit}>
        <div className="row mb-4">
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Enter a SrNo."
              value={SrNo}
              // onChange={handleEditFormChange}
              onChange={(e) => setSrNo(e.target.value)}
              required="required"
              name="SrNo"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Bookname"
              value={BookName}
              // onChange={handleAddFormChange}
              // onChange={handleEditFormChange}
              onChange={(e) => setBookName(e.target.value)}
              required="required"
              name="BookName"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Author"
              value={Author}
              // onChange={handleAddFormChange}
              // onChange={handleEditFormChange}
              onChange={(e) => setAuthor(e.target.value)}
              required="required"
              name="Author"
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Pages"
              value={Pages}
              // onChange={handleAddFormChange}
              // onChange={handleEditFormChange}
              onChange={(e) => setPages(e.target.value)}
              required="required"
              name="Pages"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Category"
              value={Category}
              // onChange={handleAddFormChange}
              // onChange={handleEditFormChange}
              onChange={(e) => setCategory(e.target.value)}
              required="required"
              name="Category"
            />
          </div>
          <button  type="submit">
            Save Changes
          </button>
          {/* <button
              type="submit"
              className="btn btn-outline-success"
              onClick={handleClose}
            >
              Edit Book Here
            </button> */}
        </div>
      </form>
    </>
  );
};

export default Example;
