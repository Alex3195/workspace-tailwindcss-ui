import React, { useState } from "react";
import Select from "./Select";
import { withTranslation } from "react-i18next";

const SearchAndFilter = ({ t, filters, setFilters }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      selectedFilter: value,
    }));
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder={t(`search`) + "..."}
        className="px-4 py-2 border border-gray-300 rounded-lg"
      />
      {filters?.length > 0 ? (
        <Select onChange={handleFilterChange} items={filters} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default withTranslation()(SearchAndFilter);
