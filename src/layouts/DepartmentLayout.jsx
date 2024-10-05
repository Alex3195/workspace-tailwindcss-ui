import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import UniversalTable from "../components/UniversalTable";
import departmentService from "../services/departmentService";

function DepartmentLayout({ t }) {
  const [data, setData] = useState([]);
  const columns = [
    { title: "№", accessor: "id" },
    { title: t("name"), accessor: "name" },
    { title: t("description"), accessor: "description" },
    { title: t("action"), accessor: "action" },
  ];
  const [totalPages, setTotalPages] = useState(0);
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
  useEffect(() => {
    departmentService.getDepartments(filter).then((res) => {
      setTotalPages(res.data.recordsTotal);
      setData(res.data.data);
    });
    return () => {};
  }, []);
  return (
    <div className="px-4 py-4 sm:px-6 lg:px-8 sm:py-6 lg:py-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            {t(`sidebar_menu_department`)}
          </h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link
            className="flex justify-between px-4 py-2 mb-4 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            to={"/department/add"}
          >
            <PlusCircleIcon className="w-6 h-6" />
            <span className="ml-2 text-base">{t(`add`)}</span>
          </Link>
        </div>
      </div>
      <UniversalTable
        data={data}
        columns={columns}
        filter={filter}
        setFilter={setFilter}
        totalItems={totalPages}
      />
    </div>
  );
}

export default withTranslation()(DepartmentLayout);
