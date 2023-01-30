import React from "react";

const ReadRow = ({ contact, handleEditClick, handleDeleteClick }) => {
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
      </td>
    </tr>
  );
};

export default ReadRow;
