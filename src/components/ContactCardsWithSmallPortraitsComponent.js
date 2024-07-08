import { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import employeeService from "../services/employeeService";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function ContactCardsWithSmallPortraits({ t }) {
  const [children, setChildren] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (update) {
      employeeService.getEmployee().then((res) => {
        setChildren(res.data);
        setUpdate(false);
      });
    }
    return () => {};
  }, [update]);

  useEffect(() => {
    employeeService.getEmployee().then((res) => {
      setChildren(res.data);
    });
    return () => {};
  }, []);
  useEffect(() => {
    console.log(children);
    return () => {};
  }, [children]);

  const handleDelete = async (id) => {
    employeeService.deleteEmployee(id).then((res) => {
      console.log(res.data);
      setUpdate(true);
    });
  };
  return (
    <div className="px-4 py-4">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            {t(`sidebar_menu_employee`)}
          </h1>
          {/* <p className="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name, title, email and role.
            </p> */}
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link
            key={"Add"}
            to={"/employee/add"}
            onClick={() => ({})}
            className="block px-3 py-2 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {t(`Add`)}
          </Link>
        </div>
      </div>
      <div className="px-4 py-4">
        <ul className="divide-y divide-gray-100">
          {children.map((person) => (
            <li key={person.id} className="flex justify-between py-5 gap-x-6">
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="flex-none w-12 h-12 rounded-full bg-gray-50"
                  src={
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  }
                  alt=""
                />
                <div className="flex-auto min-w-0">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    <a href={person.href} className="hover:underline">
                      {person.firstName}
                      {person.lastName}
                    </a>
                  </p>
                  <p className="flex mt-1 text-xs leading-5 text-gray-500">
                    <a
                      href={`mailto:${person.email}`}
                      className="truncate hover:underline"
                    >
                      {person.email}
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center shrink-0 gap-x-6">
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    {person.position}
                  </p>
                </div>
                <Menu as="div" className="relative flex-none">
                  <MenuButton className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                    <span className="sr-only">Open options</span>
                    <EllipsisVerticalIcon
                      className="w-5 h-5"
                      aria-hidden="true"
                    />
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      {({ focus }) => (
                        <Link
                          key={"edit"}
                          to={`/employee/edit/${person.id}`}
                          onClick={() => ({})}
                          className={classNames(
                            focus ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm text-center leading-6 text-gray-900"
                          )}
                        >
                          {t(`Edit`)}
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <button
                          onClick={() => handleDelete(person.id)}
                          className={classNames(
                            focus ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm leading-6 text-gray-900 cursor-pointer w-full"
                          )}
                        >
                          Delete
                        </button>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default withTranslation()(ContactCardsWithSmallPortraits);
