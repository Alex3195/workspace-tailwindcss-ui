import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import departmentService from "../services/departmentService";

function TableComponent({ t }) {
  const [update, setUpdate] = useState(false);
  const [children, setChildren] = useState([]);
  useEffect(() => {
    departmentService.getDepartments().then((res) => {
      setChildren(res.data);
    });
    return () => {};
  }, []);
  useEffect(() => {
    if (update) {
      departmentService.getDepartments().then((res) => {
        setChildren(res.data);
        setUpdate(false);
      });
    }
    return () => {};
  }, [update]);
  useEffect(() => {
    return () => {};
  }, [children]);

  const handleDelete = async (id) => {
    departmentService.deleteDepartment(id).then((res) => {
      setUpdate(true);
    });
  };
  return (
    <div className="px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            {t(`sidebar_menu_department`)}
          </h1>
          {/* <p className="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name, title, email and role.
            </p> */}
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link
            key={"Add"}
            to={"/department/add"}
            onClick={() => ({})}
            className="block px-3 py-2 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {t(`Add`)}
          </Link>
        </div>
      </div>
      <div className="flow-root mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Description
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {children.map((person) => (
                  <tr key={person.id}>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-0">
                      {person.name}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {person.description}
                    </td>
                    <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-0">
                      <div className="flex justify-between w-12">
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          <PencilIcon
                            className="-ml-0.4 h-4 w-4"
                            aria-hidden="true"
                          />
                          <Link
                            key={"edit"}
                            to={`/department/edit/${person.id}`}
                            className="text-white"
                          >
                            {t(`Edit`)}
                            <span className="sr-only">, {person.name}</span>
                          </Link>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(person.id)}
                          className=" mx-2 inline-flex items-center gap-x-2 rounded-md bg-red-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          <TrashIcon
                            className="-ml-0.4 h-4 w-4"
                            aria-hidden="true"
                          />
                          {t(`Delete`)}
                          <span className="sr-only">, {person.name}</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withTranslation()(TableComponent);
