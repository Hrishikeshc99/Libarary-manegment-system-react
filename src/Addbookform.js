import React, { useState, Fragment, Navlink, Link } from "react";
import "./index.css";
import data from "./Bookdata.json";
import { nanoid } from "nanoid";
import ReadRow from "./componends/ReadRow";
import EditRow from "./componends/EditRow";
import Addbookform from "./Addbookform";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import navlogo from "/home/hrishikeshc/Library Management System/my-app/src/logo.jpg";
// import Modal from "react-modal";
// import {Modal, ModalHeader} from "reactstrap"
// import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard";
// import { useNavigate } from "react-router-dom";


//  let history =useNavigate();


const Addbookforms = () => {
  const [contacts, setcontacts] = useState(data);


  const [addFormData, setAddFormData] = useState({
    SrNo: "",
    BookName: "",
    Author: "",
    Pages: "",
    Category: "",
  });
  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      SrNo: addFormData.SrNo,
      BookName: addFormData.BookName,
      Author: addFormData.Author,
      Pages: addFormData.Pages,
      Category: addFormData.Category,
      //  history("/dashboard");

    };

    const newContacts = [...contacts, newContact];
    setcontacts(newContacts);
  };
  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
    const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  
  // const handleAddbook=()=>{
  //   document.getElementById("button").addEventListener("click"), function(){
  //     document.querySelector(".popup").style.display="flex";
  //   }

  // }
  // const [modal,setmodal] = useState(false);
  return (
    <>
      {/* <Modal 
          size="lg"
          isopen={modal}
          toggle={()=>setmodal(!modal)}>
      <ModalHeader
       toggle={()=>setmodal(!modal)}>
        popup
      </ModalHeader>
    </Modal> */}

      {/* <button className="btn btn-primary mt-3"onClick={()=>setmodal(true)}>Add</button>

      <form class="container" onSubmit={handleAddFormSubmit}>
        <div className="row mb-4">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a SrNo."
              onChange={handleAddFormChange}
              name="SrNo"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Bookname"
              onChange={handleAddFormChange}
              name="BookName"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Author"
              onChange={handleAddFormChange}
              name="Author"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Pages"
              onChange={handleAddFormChange}
              name="Pages"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Category"
              onChange={handleAddFormChange}
              name="Category"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-success">Addhere
            </button>
          </div>
        </div>
      </form> */}
      <div>
        <div class="footer">
          <button
            class="btn btn-success "
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            add books
          </button>
        </div>

        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>hjvADXVDVDHJAVDhjvDA</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> 

      <form class="container" onSubmit={handleAddFormSubmit}>
        <div className="row mb-4">
          <div className="mb-3">
            <input
              type="text"
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
              type="text"
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
            <button type="submit" className="btn btn-success">
              Add Book Here
            </button>
          </div>
        </div>
      </form>

      <div class="conatiner">
        <button class="btn btn-success">Popup</button>
      </div>
      <div class="popup">
        <div class="popup-content">
          <form class="container" onSubmit={handleAddFormSubmit}>
            <h1>Book</h1>
            <img
              src="https://www.freeiconspng.com/thumbs/close-icon/black-close-icon-3.png"
              alt=""
              class="close-popup"
            ></img>
            <div className="row mb-4">
              <div className="mb-3">
                <input
                  type="text"
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
                  type="text"
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
                <button type="submit" className="btn btn-success">
                  Add Book Here
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <input
          type="button"
          value="Click to Open Popup"
          onClick={togglePopup}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {isOpen && (
          <Addbookform
            content={
              <>
                <b>Design your Popup</b>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <button>Test button</button>
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </div>
    </>
  );
};

export default Addbookforms;
