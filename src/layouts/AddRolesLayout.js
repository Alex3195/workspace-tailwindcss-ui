import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import RoleFrom from "../components/RoleForm";

function AddRolesLayout(props) {
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    return () => {};
  }, [id]);
  return <RoleFrom />;
}

export default AddRolesLayout;
