import React, { useState, Fragment, useNavigate } from "react";
import "./index.css";
import data from "./Bookdata.json";
import { nanoid } from "nanoid";
import ReadRow from "./componends/ReadRow";
import EditRow from "./componends/EditRow";
import Addbookform from "./Addbookform";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import navlogo from "/home/hrishikeshc/Library Management System/my-app/src/logo.jpg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Dashboard = () => {
  // if(!authorized){
  //   return<Redirect to="/"/>
  // }
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

  //edit section
  const handleEditFormChange = (e) => {
    e.preventDefault();

    const FieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[FieldName] = fieldValue;

    setEditFormData(newFormData);
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

  const handleCancelClick = () => {
    setEditContactId(null);
  };
  const handleDeleteClick = (ContactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === ContactId);

    newContacts.splice(index, 1);

    setcontacts(newContacts);
    alert("Record Deleted.");
  };

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
      {/* position="static" color="secondary" */}
      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="secondary"
          style={{ color: "white", backgroundColor: "#652864" }}
        >
          <Toolbar>
            <Typography varient="h5" component="div" sx={{ flexGrow: 1 }}>
              <img src={navlogo} width="30" height="30" alt="" />
              Library Management System
            </Typography>
            <h4>{getEmail}</h4>
            <NavLink to="/">
              <button class=" btn btn-primary" onClick={handleClickLogout}>
                Logout
              </button>
            </NavLink>
          </Toolbar>
        </AppBar>
      </Box> */}

      <Navbar
        // position="static"
        // color="secondary"
        style={{ color: "white", background: "#652864" }}
      >
        <Container>
          <img src={navlogo} width="50" height="50" alt="" />
          <Navbar.Brand class="bg-color-white">
            <h3>Library Management System</h3>
          </Navbar.Brand>
          <h5>{getEmail}</h5>

          <Nav className="me-auto">
            <div className="position-absolute top-0 end-0">
              <NavLink to="/">
                <li>
                  <button
                    class="btn btn-outline-danger btn-lg float-right"
                    // className=" btn btn-primary "
                    onClick={handleClickLogout}
                  >
                    Logout
                  </button>
                </li>
              </NavLink>
            </div>
          </Nav>
        </Container>
      </Navbar>

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
          <table class="container table table-info table-striped">
            <thead
              class="table"
              style={{ color: "white", backgroundColor: "#652864" }}
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

            <tbody></tbody>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditRow
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
                  onClick={handleClose}
                >
                  Add Book Here
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes  
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Dashboard;
