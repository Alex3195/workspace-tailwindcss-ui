import { useEffect, useRef, useState } from "react";
import { withTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import employeeService from "../services/employeeService";
import projectService from "../services/projectService";

function AddProjectFormComponent({ t }) {
  const [leadersArray, setLeadersArray] = useState([]);
  const titleRef = useRef();
  const leaderIdRef = useRef();
  const budgetSumRef = useRef();
  const spentSumRef = useRef();
  const residualRef = useRef();
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const onCancel = () => {
    navigate("/project");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id: id || null,
      name: titleRef.current.value,
      responsibleLeaderId: leaderIdRef.current.value,
      budgetSum: budgetSumRef.current.value,
      spentSum: spentSumRef.current.value,
      residualSum: residualRef.current.value,
    };
    if (id) {
      projectService
        .updateProject(data)
        .then((res) => {
          navigate("/project");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      projectService
        .addProject(data)
        .then((res) => {
          navigate("/project");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    if (id) {
      projectService
        .getProjectById(id)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    employeeService.getEmployee().then((res) => {
      setLeadersArray(res.data);
    });
    return () => {};
  }, []);
  useEffect(() => {
    console.log(data);
    return () => {};
  }, [leadersArray, data]);
  return (
    <form
      onSubmit={handleSubmit}
      className="px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8"
    >
      <div className="space-y-12 sm:space-y-16">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Project Information
          </h2>
          <p className="max-w-2xl mt-1 text-sm leading-6 text-gray-600">
            Use a permanent data.
          </p>

          <div className="pb-12 mt-10 space-y-8 border-b border-gray-900/10 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Title
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="title"
                  id="title"
                  ref={titleRef}
                  defaultValue={data.name}
                  className="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="leader"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Responsible leader
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <select
                  id="leader"
                  name="leader"
                  autoComplete="leader"
                  ref={leaderIdRef}
                  defaultValue={data.responsibleLeaderId}
                  className="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  {leadersArray.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.firstName} {item.lastName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="budget-sum"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Budget sum
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="number"
                  name="budget-sum"
                  id="budget-sum"
                  ref={budgetSumRef}
                  defaultValue={data.budgetSum}
                  className="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="spent-sum"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Spent sum
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="number"
                  name="spent-sum"
                  id="spent-sum"
                  ref={spentSumRef}
                  defaultValue={data.spentSum}
                  className="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="residual-sum"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Residual sum
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="number"
                  name="residual-sum"
                  id="residual-sum"
                  ref={residualRef}
                  defaultValue={data.residualSum}
                  className="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
export default withTranslation()(AddProjectFormComponent);
