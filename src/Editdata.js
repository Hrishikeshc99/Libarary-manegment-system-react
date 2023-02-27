import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Employees from "./Employees";
import data from "./Bookdata.json";

import { Link, useNavigate } from "react-router-dom";
// import { v4 as uuid } from "uuid";

function Edit() {
  const [SrNo, setSrNo] = useState("");
  const [BookName, setBookName] = useState("");
  const [Author, setAuthor] = useState("");
  const [Pages, setPages] = useState("");
  const [Category, setcategory] = useState("");
  const [id, setId] = useState("");

    let history = useNavigate();

  var index = data
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = data[index];
    a.SrNo = SrNo;
    a.BookName = BookName;
    a.Author = Author;
    a.Pages = Pages;
    a.Category = Category;

    history("/dashboard");
  };

  useEffect(() => {
    setSrNo(localStorage.getItem("SrNo"));
    setBookName(localStorage.getItem("BookName"));
    setAuthor(localStorage.getItem("Author"));
    setPages(localStorage.getItem("Pages"));
    setcategory(localStorage.getItem("Category"));
    setId(localStorage.getItem("Id"));
  }, []);

  return (
    <div>
      <section class="main_heading " id="Patient-list">
        <div class="text-center">
          <h1 id="contactus" class="display-3" style={{ marginTop: "50px" }}>
            Edit Details
          </h1>
          <hr class="w-25  mx-auto bg-dark" style={{ height: "3px" }} />

          <form class="container">
            <div className="row mb-4">
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter a SrNo."
                  value={SrNo}
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
                  onChange={(e) => setcategory(e.target.value)}
                  required="required"
                  name="Category"
                />
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-outline-success"
                  onClick={(e) => handleSubmit(e)}
                >
                  Edit Book Here
                </button>
              </div>
            </div>
          </form>

          {/* <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
            <Form.Group className="mb-3" controlID="formName">
              <Form.Control
                type="text"
                placeholder="Enter Name"
                required
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlID="formContact">
              <Form.Control
                type="text"
                placeholder="Enter Contact"
                required
                onChange={(e) => setContact(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlID="formRoom">
              <Form.Control
                type="text"
                placeholder="Enter Room"
                required
                onChange={(e) => setRoom(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlID="formBill">
              <Form.Control
                type="text"
                placeholder="Enter Bill"
                required
                onChange={(e) => setBill(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              style={{ color: "#FFFFFF", backgroundColor: "#457" }}
            >
              Update
            </Button>
          </Form> */}
        </div>
      </section>
    </div>
  );
}
export default Edit;
