import { useEffect, useRef, useState } from "react";
import { withTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import employeeService from "../services/employeeService";

function AddEmployeeFormComponent({ t }) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
  });
  const onCancel = () => {
    navigate("/employee");
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const data = JSON.stringify({
        id: id || null,
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
      });
      if (id) {
        employeeService
          .updateEmployee(data)
          .then((res) => {
            navigate("/employee");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        employeeService
          .addEmployee(data)
          .then((res) => {
            navigate("/employee");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (id) {
      employeeService.getEmployeeById(id).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    }
    return () => {};
  }, [id]);
  return (
    <form
      onSubmit={handleSubmit}
      className="px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8"
    >
      <div className="space-y-12 sm:space-y-16">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Employee Information
          </h2>
          <p className="max-w-2xl mt-1 text-sm leading-6 text-gray-600">
            Use a permanent data.
          </p>

          <div className="pb-12 mt-10 space-y-8 border-b border-gray-900/10 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                First name
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  ref={firstNameRef}
                  autoComplete="given-name"
                  defaultValue={data.firstName}
                  className="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Last name
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  ref={lastNameRef}
                  defaultValue={data.lastName}
                  className="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Email
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="email"
                  id="email"
                  ref={emailRef}
                  autoComplete="email"
                  defaultValue={data.email}
                  className="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Phone
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="phone"
                  name="phone"
                  ref={phoneRef}
                  id="phone"
                  defaultValue={data.phone}
                  className="block w-full px-2 max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end mt-6 gap-x-6">
        <button
          type="button"
          onClick={onCancel}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex justify-center px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
export default withTranslation()(AddEmployeeFormComponent);
