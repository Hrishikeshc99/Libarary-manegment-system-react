import React, { useState } from "react";

const Crud = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  const [tabledata, setTabledata] = useState([]);

  const [editclick, setEditclick] = useState(false);
  const handlechange = (e) => {
    setInput({
      ...input,
      [e.target.name]: [e.target.value],
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log("inputs", input);
    setTabledata([...tabledata, input]);
    setInput({
      name: "",
      email: "",
    });
  };
  const handledelete = (index) => {
    const filterdata = tabledata.filter((item, i) => i !== index);
    setTabledata(filterdata);
  };

  const handleedit = (index) => {
    const tempData = tabledata[index];
    console.log(tempData);
    setInput({ name: tempData.name, email: tempData.email });
    setEditclick(true);
  };
  return (
    <>
      <h1 className="text-center">
        filterdata crud app
        <div>
          <form onSubmit={handlesubmit}>
            <div>
              <lable>name</lable>
              <input
                type="text"
                placeholder="name"
                name="name"
                value={input.name}
                onChange={handlechange}
              ></input>
            </div>
            <div>
              <lable>email</lable>
              <input
                type="text"
                placeholder="email"
                name="email"
                value={input.email}
                onChange={handlechange}
              ></input>
            </div>
            <div>
              <button type="submit"> {editclick ? "update" : "add"}</button>
            </div>
          </form>
        </div>
      </h1>
      <div>
        <table className="text-center">
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              {/* <th>action</th> */}
            </tr>
          </thead>
          <tbody>
            {tabledata.map((item, i) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={handleedit}>edit</button>
                  <button onClick={() => handledelete(i)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Crud;
