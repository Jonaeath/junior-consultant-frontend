import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`)
      .then(() => {
        // Filter out the deleted item from the data and update the state
        setData((prevData) => prevData.filter((user) => user.id !== id));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="m-4">
        <Link to="/employeeFrom">
          <button className="btn btn-primary">Add New Employee</button>
        </Link>
      </div>
      <br />
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              {data.length > 0 &&
                data.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.employee_name}</td>
                    <td>{user.employee_salary}</td>
                    <td>{user.employee_age}</td>
                    <td>
                      <Link to={`/update/${user.id}`}>
                        <button className="btn btn-sm btn-primary mx-2">
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
