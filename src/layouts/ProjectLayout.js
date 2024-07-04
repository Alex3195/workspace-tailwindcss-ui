import React, { useEffect, useState } from "react";
import LogosCardWithDescriptions from "../components/LogosCardWithDescriptionsComponent";
import projectService from "../services/projectService";
import { useParams } from "react-router-dom";
function ProjectLayout(props) {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    projectService
      .getProjects()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, []);
  useEffect(() => {
    return () => {};
  }, [data, id]);
  return (
    <>
      <LogosCardWithDescriptions children={data} id={id} />
    </>
  );
}

export default ProjectLayout;
