import React from "react";
import AddDepartmentFormComponent from "../components/AddDepartmentFormComponent";
import { useParams } from "react-router-dom";

function AddDepartmentLayout(props) {
  const { id } = useParams();
  return (
    <>
      <AddDepartmentFormComponent id={id} />
    </>
  );
}

export default AddDepartmentLayout;
