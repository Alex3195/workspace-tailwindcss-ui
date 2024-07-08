import { useEffect, useRef, useState } from "react";
import { withTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import roleService from "../services/roleService";

function RoleFrom({ t }) {
  const roleNameRef = useRef();
  const roleDescriptionRef = useRef();
  const [data, setData] = useState({ id: null, name: "", description: "" });
  const { id } = useParams();
  const navigate = useNavigate();
  const navigateToTable = () => {
    navigate("/role");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      const bodyJson = {
        id: id,
        name: roleNameRef.current.value,
        description: roleDescriptionRef.current.value,
      };
      roleService.updateRole(bodyJson).then((res) => {
        navigateToTable();
      });
    } else {
      const bodyJson = {
        name: roleNameRef.current.value,
        description: roleDescriptionRef.current.value,
      };
      roleService.addRole(bodyJson).then((res) => {
        navigateToTable();
      });
    }
  };
  useEffect(() => {
    if (id) {
      roleService.getRoleById(id).then((res) => {
        setData(res.data);
      });
    }
    return () => {};
  }, [id]);

  return (
    <div className="px-4 py-4 sm:px-6 lg:px-8 sm:py-6 lg:py-8">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12 sm:space-y-16">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Role Information
            </h2>

            <div className="pb-12 mt-10 space-y-8 border-b border-gray-900/10 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Name
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    defaultValue={data.name}
                    ref={roleNameRef}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-2xl sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Description
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={data.description}
                    ref={roleDescriptionRef}
                    required
                  />
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about role.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end mt-6 gap-x-6">
          <button
            type="button"
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
    </div>
  );
}
export default withTranslation()(RoleFrom);
