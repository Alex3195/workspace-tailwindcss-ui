import React from "react";

function Select({ onChange, items }) {
  return (
    <div>
      <select
        id="location"
        name="location"
        defaultValue="Canada"
        className=" block w-full h-full ml-2 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        {items?.map((item, ind) => (
          <option key={ind} value={{ item }}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
