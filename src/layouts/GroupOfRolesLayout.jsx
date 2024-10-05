import {
  PencilSquareIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import SearchAndFilter from "../components/SearchAndFilter";
import UniversalTable from "../components/UniversalTable";
import groupOfRolesService from "../services/groupOfRolesService";

function GroupOfRolesLayout({ t }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filterItems = ["Active", "Inactive", "Pending"]; // Assuming filters are key-value pairs
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
  const columns = [
    { title: "№", accessor: "id" },
    { title: t("name"), accessor: "name" },
    { title: t("description"), accessor: "description" },
    { title: t("action"), accessor: "action" },
  ];
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const filteredData = data.filter((item) => {
    const matchesSearch = Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );

    // const matchesFilters = Object.entries(filters).every(
    //   ([key, value]) => item[key] === value
    // );

    // return matchesSearch && matchesFilters;
    return item;
  });
  useEffect(() => {
    groupOfRolesService.getGroupOfRoles(filter).then((res) => {
      console.log(res.data);
      setTotalPages(res.data.recordsFiltered);
      setData(
        res.data.data.map((item, ind) => {
          return {
            ...item,
            id: (res.data.draw - 1) * 10 + ind + 1,
            action: (
              <div className="flex justify-between w-16">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/group-of-role/edit/" + item.id);
                  }}
                  className="p-1 text-white rounded-full shadow-sm bg-cyan-600 hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                >
                  <PencilSquareIcon aria-hidden="true" className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    groupOfRolesService
                      .deleteGroupOfRole(item.id)
                      .then((res) => {
                        navigate("/group-of-role");
                      });
                  }}
                  className="p-1 text-white bg-pink-600 rounded-full shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                >
                  <TrashIcon aria-hidden="true" className="w-5 h-5" />
                </button>
              </div>
            ),
          };
        })
      );
    });
    return () => {};
  }, [filter]);
  useEffect(() => {
    console.log(filteredData);

    return () => {};
  }, [filteredData]);
  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-semibold">{t(`list_of_projects`)}</h1>
      <div className="flex justify-between">
        <SearchAndFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterItems={filterItems}
          filter={filter}
          setFilters={setFilter}
        />
        <Link
          type="button"
          className="flex justify-between px-4 py-2 mb-4 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          to={"/group-of-role/add"}
        >
          <PlusCircleIcon className="w-6 h-6" />
          <span className="ml-2 text-base">{t(`add`)}</span>
        </Link>
      </div>
      <UniversalTable
        columns={columns}
        data={filteredData}
        totalItems={totalPages}
        setFilter={setFilter}
        filter={filter}
      />
    </div>
  );
}

export default withTranslation()(GroupOfRolesLayout);
