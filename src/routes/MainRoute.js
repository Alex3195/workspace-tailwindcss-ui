import React from "react";
import { Route, Routes } from "react-router-dom";
import AddDepartmentLayout from "../layouts/AddDepartmentLayout";
import AddEmployeeLayout from "../layouts/AddEmployeeLayout";
import AddMeetingsLayout from "../layouts/AddMeetingsLayout";
import AddProjectLayout from "../layouts/AddProjectLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import DepartmentLayout from "../layouts/DepartmentLayout";
import EmployeeLayout from "../layouts/EmployeeLayout";
import MeetingsLayout from "../layouts/MeetingsLayout";
import ProjectLayout from "../layouts/ProjectLayout";
import RolesLayout from "../layouts/RolesLayout";
import AddRolesLayout from "../layouts/AddRolesLayout";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />} />
      <Route path="/department" element={<DepartmentLayout />} />
      <Route path="/department/add" element={<AddDepartmentLayout />} />
      <Route path="/department/edit/:id" element={<AddDepartmentLayout />} />
      <Route path="/project" element={<ProjectLayout />} />
      <Route path="/project/add" element={<AddProjectLayout />} />
      <Route path="/project/edit/:id" element={<AddProjectLayout />} />
      <Route path="/employee" element={<EmployeeLayout />} />
      <Route path="/employee/add" element={<AddEmployeeLayout />} />
      <Route path="/employee/edit/:id" element={<AddEmployeeLayout />} />
      <Route path="/meeting" element={<MeetingsLayout />} />
      <Route path="/meeting/add" element={<AddMeetingsLayout />} />
      <Route path="/meeting/edit/:id" element={<AddMeetingsLayout />} />
      <Route path="/role" element={<RolesLayout />} />
      <Route path="/role/add" element={<AddRolesLayout />} />
      <Route path="/role/edit/:id" element={<AddDepartmentLayout />} />
    </Routes>
  );
};

export default MainRoutes;
