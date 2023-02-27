import React, { useState, Fragment, useNavigate } from "react";
import "./index.css";
import data from "./Bookdata.json";
import { nanoid } from "nanoid";
import ReadRow from "./componends/ReadRow";
import EditRow from "./componends/EditRow";
// import Addbookform from "./Addbookform";
import navlogo from "/home/hrishikeshc/Library Management System/my-app/src/logo.jpg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import Example from "./Example";

const Dashboard = () => {
  const [contacts, setcontacts] = useState(data);

  const [addFormData, setAddFormData] = useState({
    SrNo: "",
    BookName: "",
    Author: "",
    Pages: "",
    Category: "",
  });

  const [editFormData, setEditFormData] = useState({
    SrNo: "",
    BookName: "",
    Author: "",
    Pages: "",
    Category: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  //add form section
  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      SrNo: addFormData.SrNo,
      BookName: addFormData.BookName,
      Author: addFormData.Author,
      Pages: addFormData.Pages,
      Category: addFormData.Category,
    };

    const newContacts = [...contacts, newContact];
    setcontacts(newContacts);
    alert("Book Added...  ");
  };

  //edit section
  const handleEditClick = (e, contact) => {
    e.preventDefault();
    setEditContactId(contact.id);

    const formvalues = {
      SrNo: contact.SrNo,
      BookName: contact.BookName,
      Author: contact.Author,
      Pages: contact.Pages,
      Category: contact.Category,
    };
    setEditFormData(formvalues);
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const FieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[FieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedContact = {
      id: editContactId,
      SrNo: editFormData.SrNo,
      BookName: editFormData.BookName,
      Author: editFormData.Author,
      Pages: editFormData.Pages,
      Category: editFormData.Category,
    };
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setcontacts(newContacts);
    setEditContactId(null);
  };

  //edit cancel click

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  //delete
  const handleDeleteClick = (ContactId) => {
    if (window.confirm("Do you want to delete") === true) {
      const newContacts = [...contacts];

      const index = contacts.findIndex((contact) => contact.id === ContactId);

      newContacts.splice(index, 1);

      setcontacts(newContacts);

      alert("Record Deleted.");
    } else {
    }
  };

  // *****************Edit popup **********

  // const updateContact = (id, updatedContact) => {
  //   setcontacts(
  //     contacts.map((contact) => (contact.id === id ? updatedContact : contact))
  //   );
  // };

  //logout button

  const handleClickLogout = () => {
    alert("logout sucessfull");
    localStorage.clear();
  };

  const getEmail = localStorage.getItem("emailData");

  //add book popup

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="dashboard-page">
        <Navbar
          style={{
            background: "black",
            // background: "#fce17e",
            position: "fixed",
            width: "100%",
            height: "10%",
          }}
        >
          {/* <Container> */}
          <img
            style={{ paddingLeft: "20px", width: "70px", height: "50px" }}
            src={navlogo}
            alt=""
          />
          <Navbar.Brand>
            <h1
              style={{ color: "white", margin: "auto", paddingLeft: "10rem" }}
            >
              LMS
            </h1>
          </Navbar.Brand>
          <div>
            <h5
              style={{
                color: "white",
                position: "absolute",
                right: "150px",
                top: "40px",
              }}
            >
              {getEmail}
            </h5>
          </div>
          {/* <h5 class=" fa fa-envelape-o">{getEmail}</h5> */}

          <Nav className="me-auto">
            <div className="position-absolute top-0 end-0">
              <NavLink to="/">
                <li style={{ margin: "30px" }}>
                  <button
                    class="btn btn-outline-danger btn-lg float-right"
                    onClick={handleClickLogout}
                  >
                    Logout
                  </button>
                </li>
              </NavLink>
            </div>
          </Nav>
          {/* </Container> */}
        </Navbar>
        <div className="dash-heading">
          <h1 style={{ textAlign: "center", paddingTop: "200px" }}>
            Welcome To Library Management System
          </h1>
        </div>
        <h5 style={{ textAlign: "center" }}>-Hrishikesh Chavan</h5>
        <a
          style={{ display: "flex", justifyContent: "center", margin: "4rem" }}
          href="#book-list"
        >
          <button class="btn btn-outline-success btn-lg " type="submit">
            ViewBooks
          </button>
        </a>
      </div>

      <section class="main_heading my-2" id="book-list">
        <div class="text-center">
          <h1 class="display-4">Books List</h1>
        </div>
      </section>

      <div className="dashboard">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            margin: "1em",
          }}
        >
          <button
            class="btn btn-outline-info"
            // id="right-panel-link"
            // variant="primary"
            onClick={handleShow}
          >
            Add Book
          </button>
        </div>
        <form onSubmit={handleEditFormSubmit}>
          <table class="container table  table-striped">
            <thead
              class="table"
              style={{ color: "white", backgroundColor: "black" }}
            >
              <tr>
                <th scope="col">SrNo</th>
                <th scope="col">BookName</th>
                <th scope="col">Author</th>
                <th scope="col">Pages</th>
                <th scope="col">Category</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    // <Example
                    <EditRow
                      // updateContact={updateContact}
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill Book Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form class="container" onSubmit={handleAddFormSubmit}>
            <div className="row mb-4">
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter a SrNo."
                  onChange={handleAddFormChange}
                  required="required"
                  name="SrNo"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bookname"
                  onChange={handleAddFormChange}
                  required="required"
                  name="BookName"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Author"
                  onChange={handleAddFormChange}
                  required="required"
                  name="Author"
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Pages"
                  onChange={handleAddFormChange}
                  required="required"
                  name="Pages"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Category"
                  onChange={handleAddFormChange}
                  required="required"
                  name="Category"
                />
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-outline-success"
                  // onClick={handleClose}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Dashboard;
