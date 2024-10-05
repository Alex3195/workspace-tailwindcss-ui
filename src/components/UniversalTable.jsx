import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { withTranslation } from "react-i18next";

const UniversalTable = ({
  t,
  columns,
  data,
  rowsPerPage = 10,
  totalItems,
  setFilter,
  filter,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages =
    Math.ceil(totalItems / rowsPerPage) > 0
      ? Math.ceil(totalItems / rowsPerPage)
      : Math.ceil(totalItems / rowsPerPage) + 1;

  // Filter data based on search term and filters

  useEffect(() => {
    console.log(totalPages);

    return () => {};
  }, []);
  useEffect(() => {
    setFilter({
      ...filter,
      draw: currentPage + 1,
      start: currentPage   * rowsPerPage,
    });
    return () => {};
  }, [currentPage]);
  return (
    <div>
      {/* Integrate SearchAndFilter component */}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="w-full text-sm leading-normal text-gray-600 uppercase bg-gray-100">
              {columns.map((column, index) => (
                <th key={index} className="px-6 py-3 text-left">
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm font-light text-gray-900">
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} className="px-6 py-3">
                      {row[column.accessor]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="py-3 text-center">
                  {t(`no_data`)}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default withTranslation()(UniversalTable);
