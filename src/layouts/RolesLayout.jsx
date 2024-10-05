import {
  PencilSquareIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import UniversalTable from "../components/UniversalTable";
import roleService from "../services/roleService";

function RolesLayout({ t }) {
  const [rolesArray, setRolesArray] = useState([]);
  const columns = [
    { title: "№", accessor: "id" },
    { title: t("name"), accessor: "name" },
    { title: t("description"), accessor: "description" },
    { title: t("action"), accessor: "action" },
  ];
  const [filter, setFilter] = useState({
    draw: 1,
    start: 0,
    length: 10,
    recordsTotal: 0,
    columns: [],
    order: [],
    search: { value: "", regex: true },
    filter: {
      param: "",
    },
  });
  const [totalPages, setTotalPages] = useState(0);
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
    roleService.getRoles(filter).then((res) => {
      setTotalPages(res.data.recordsTotal);
      setRolesArray(
        res.data.data.map((item, idx) => {
          return {
            ...item,
            id: (res.data.draw - 1) * 10 + idx + 1,
            action: (
              <div className="flex justify-between w-16">
                <Link
                  type="button"
                  to={"/role/edit/" + item.id}
                  className="p-1 text-white rounded-full shadow-sm bg-cyan-600 hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                >
                  <PencilSquareIcon aria-hidden="true" className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                  className="p-1 text-white bg-pink-600 rounded-full shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                >
                  <TrashIcon aria-hidden="true" className="w-4 h-4" />
                </button>
              </div>
            ),
          };
        })
      );
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
            className="flex justify-between px-4 py-2 mb-4 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            to={"/role/add"}
          >
            <PlusCircleIcon className="w-6 h-6" />
            <span className="ml-2 text-base">{t(`add`)}</span>
          </Link>
        </div>
      </div>
      <UniversalTable
        data={rolesArray}
        columns={columns}
        filter={filter}
        setFilter={setFilter}
        totalItems={totalPages}
      />
    </div>
  );
}
export default withTranslation()(RolesLayout);
