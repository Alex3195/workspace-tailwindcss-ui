import React, { useEffect, useRef, useState } from "react";
import { withTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import groupOfRolesService from "../services/groupOfRolesService";

function AddOrEditGroupOfRolesLayout({ t }) {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const { id } = useParams();
  const [data, setData] = useState({ name: "", description: "" });
  const navigate = useNavigate();
  const onCancel = () => {
    navigate("/group-of-role");
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const data = JSON.stringify({
        id: id || null,
        name: nameRef.current.value,
        description: descriptionRef.current.value,
      });
      if (id) {
        groupOfRolesService
          .updateGroupOfRole(data)
          .then((res) => {
            navigate("/group-of-role");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        groupOfRolesService
          .addGroupOfRole(data)
          .then((res) => {
            navigate("/group-of-role");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    if (id) {
      console.log(id);
      groupOfRolesService.getGroupOfRoleById(id).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    }
    return () => {};
  }, [id]);

  return (
    <form
      onSubmit={handleSubmit}
      className="px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8"
    >
      <div className="space-y-12 sm:space-y-16">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            {id ? t(`group_of_roles_edit`) : t(`group_of_roles_add`)}
          </h2>

          <div className="pb-12 mt-10 space-y-8 border-b border-gray-900/10 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                {t(`name`)}
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  ref={nameRef}
                  defaultValue={data.name}
                  className="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                {t(`description`)}
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  ref={descriptionRef}
                  className="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={data.description}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end mt-6 gap-x-6">
        <button
          type="button"
          onClick={() => onCancel()}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          {t("cancel")}
        </button>
        <button
          type="submit"
          className="inline-flex justify-center px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {t(`save`)}
        </button>
      </div>
    </form>
  );
}
export default withTranslation()(AddOrEditGroupOfRolesLayout);
