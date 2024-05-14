import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateEmployForm = () => {
  const [values, setValues] = useState({
    employee_name: "",
    employee_salary: "",
    employee_age: "",
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (
      !values.employee_name ||
      !values.employee_salary ||
      !values.employee_age
    ) {
      setError("All fields are required");
      return;
    }

    // Additional validation for salary and age
    if (
      isNaN(Number(values.employee_salary)) ||
      isNaN(Number(values.employee_age))
    ) {
      setError("Salary and Age must be valid numbers");
      return;
    }

    axios
      .post("https://dummy.restapiexample.com/api/v1/create/", values)
      .then((res) => {
        console.log(res);
        // Clear form values and error message, show success message
        setValues({
          employee_name: "",
          employee_salary: "",
          employee_age: "",
        });
        setError(null);
        setSuccessMessage("Employee added successfully!");
        setTimeout(() => {
          setSuccessMessage("");
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        setError(
          "An error occurred while submitting the form. Please try again later."
        );
        console.error(err);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-full md:w-96 shadow-2xl bg-base-100 py-10 px-8">
        <form onSubmit={handleSubmit}>
          <h1 className="text-4xl text-center font-bold mb-8">Employee Form</h1>
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
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {successMessage && (
            <p className="text-green-500 text-sm mt-2">{successMessage}</p>
          )}
        </form>
        <p className="text-center mt-4">
          Go to Home?{" "}
          <Link to="/" className="text-orange-600 font-bold ml-1">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CreateEmployForm;
