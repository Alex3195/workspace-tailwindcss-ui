import { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import roleService from "../services/roleService";
import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";

function RolesLayout({ t }) {
  const [rolesArray, setRolesArray] = useState([]);
  const handleDelete = async (id) => {
    roleService.deleteRole(id).then((res) => {
      const modifiedArray = rolesArray.splice(
        rolesArray.find((x) => x.id === id),
        1
      );
      setRolesArray(modifiedArray);
    });
  };
  useEffect(() => {
    roleService.getRoles().then((res) => {
      setRolesArray(res.data);
    });
    return () => {};
  }, []);
  useEffect(() => {
    console.log(rolesArray, "array changed   ");
    return () => {};
  }, [rolesArray]);
  return (
    <div className="px-4 py-4 sm:px-6 lg:px-8 sm:py-6 lg:py-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            {t(`sidebar_menu_roles`)}
          </h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link
            className="block px-3 py-2 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            to={"/role/add"}
          >
            {t("Add")}
          </Link>
        </div>
      </div>
      <div className="flow-root mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Description
                    </th>

                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {rolesArray.map((role) => (
                    <tr key={role.id}>
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                        {role.name}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {role.description}
                      </td>
                      <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
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
                              to={`/role/edit/${role.id}`}
                              className="text-white"
                            >
                              {t(`Edit`)}
                              <span className="sr-only">, {role.name}</span>
                            </Link>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(role.id)}
                            className=" mx-2 inline-flex items-center gap-x-2 rounded-md bg-red-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            <TrashIcon
                              className="-ml-0.4 h-4 w-4"
                              aria-hidden="true"
                            />
                            {t(`Edit`)}
                            <span className="sr-only">, {role.name}</span>
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
    </div>
  );
}
export default withTranslation()(RolesLayout);
