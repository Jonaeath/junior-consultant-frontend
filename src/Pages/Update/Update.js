import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://dummy.restapiexample.com/api/v1/employee/" + id)
      .then((res) => {
        console.log(res);
        setValues({
          ...values,
          employee_name: res.data[0].employee_name,
          employee_salary: res.data[0].employee_salary,
          employee_age: res.data[0].employee_age,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const [values, setValues] = useState({
    employee_name: "",
    employee_salary: "",
    employee_age: "",
  });

  const handelUpdate = (event) => {
    event.preventDefault();
    axios
      .put("https://dummy.restapiexample.com/api/v1/update/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="card w-full md:w-96 shadow-2xl bg-base-100 py-10 px-8">
          <form onSubmit={handelUpdate}>
            <h1 className="text-4xl text-center font-bold mb-8">
              Employee Update Form
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Employee Name</span>
              </label>
              <input
                name="employee_name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                value={values.employee_name}
                onChange={(e) =>
                  setValues({ ...values, employee_name: e.target.value })
                }
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Employee Salary</span>
              </label>
              <input
                type="number"
                name="employee_salary"
                placeholder="Salary"
                className="input input-bordered"
                value={values.employee_salary}
                onChange={(e) =>
                  setValues({ ...values, employee_salary: e.target.value })
                }
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Employee Age</span>
              </label>
              <input
                type="number"
                name="employee_age"
                placeholder="Age"
                className="input input-bordered"
                value={values.employee_age}
                onChange={(e) =>
                  setValues({ ...values, employee_age: e.target.value })
                }
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary w-full uppercase"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
          <p className="text-center mt-4">
            Go to Home?{" "}
            <Link to="/" className="text-orange-600 font-bold ml-1">
              Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Update;
