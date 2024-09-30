import React, { useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { withTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import projectService from "../services/projectService";

const statuses = {
  Paid: "text-green-700 bg-green-50 ring-green-600/20",
  Withdraw: "text-gray-600 bg-gray-50 ring-gray-500/10",
  Overdue: "text-red-700 bg-red-50 ring-red-600/10",
};
const clients = [
  {
    id: 1,
    name: "Tuple",
    imageUrl: "https://tailwindui.com/img/logos/48x48/tuple.svg",
    lastInvoice: {
      date: "December 13, 2022",
      dateTime: "2022-12-13",
      amount: "$2,000.00",
      status: "Overdue",
    },
  },
  {
    id: 2,
    name: "SavvyCal",
    imageUrl: "https://tailwindui.com/img/logos/48x48/savvycal.svg",
    lastInvoice: {
      date: "January 22, 2023",
      dateTime: "2023-01-22",
      amount: "$14,000.00",
      status: "Paid",
    },
  },
  {
    id: 3,
    name: "Reform",
    imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
    lastInvoice: {
      date: "January 23, 2023",
      dateTime: "2023-01-23",
      amount: "$7,600.00",
      status: "Paid",
    },
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function LogosCardWithDescriptions({ t, children }) {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    projectService.deleteProject(id).then((res) => {
      console.log(res);
      navigate("/project");
    });
  };
  useEffect(() => {
    console.log(children);
    return () => {};
  }, [children]);
  return (
    <div className="px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            {t(`sidebar_menu_project`)}
          </h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link
            key={"Add"}
            to={"/project/add"}
            onClick={() => ({})}
            className="block px-3 py-2 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {t(`Add`)}
          </Link>
        </div>
      </div>
      <div className="py-4 sm:py-6 lg:py-8">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
        >
          {children.map((client) => (
            <li
              key={client.id}
              className="overflow-hidden border border-gray-200 rounded-xl"
            >
              <div className="flex items-center p-6 border-b gap-x-4 border-gray-900/5 bg-gray-50">
                <img
                  src={"https://tailwindui.com/img/logos/48x48/tuple.svg"}
                  alt={client.name}
                  className="flex-none object-cover w-12 h-12 bg-white rounded-lg ring-1 ring-gray-900/10"
                />
                <div className="text-sm font-medium leading-6 text-gray-900">
                  {client.name}
                </div>
                <Menu as="div" className="relative ml-auto">
                  <MenuButton className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Open options</span>
                    <EllipsisHorizontalIcon
                      className="w-5 h-5"
                      aria-hidden="true"
                    />
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      {({ focus }) => (
                        <Link
                          key={"Add"}
                          to={`/project/edit/${client.id}`}
                          onClick={() => ({})}
                          className={classNames(
                            focus ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm leading-6 text-gray-900"
                          )}
                        >
                          {t(`Edit`)}
                          <span className="sr-only">, {client.name}</span>
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <Link
                          key={"delete"}
                          onClick={() => handleDelete(client.id)}
                          className={classNames(
                            focus ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm leading-6 text-gray-900"
                          )}
                        >
                          {t(`Delete`)}
                          <span className="sr-only">, {client.name}</span>
                        </Link>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
              <dl className="px-6 py-4 -my-3 text-sm leading-6 divide-y divide-gray-100">
                <div className="flex justify-between py-3 gap-x-4">
                  <dt className="text-gray-500">Budget sum</dt>
                  <dd className="flex items-start gap-x-2">
                    <div className="font-medium text-gray-900">
                      {client.budgetSum}
                    </div>
                    <div
                      className={classNames(
                        statuses["Paid"],
                        "rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                      )}
                    >
                      Paid
                    </div>
                  </dd>
                </div>
              </dl>
              <dl className="px-6 py-4 -my-3 text-sm leading-6 divide-y divide-gray-100">
                <div className="flex justify-between py-3 gap-x-4">
                  <dt className="text-gray-500">Spent sum</dt>
                  <dd className="flex items-start gap-x-2">
                    <div className="font-medium text-gray-900">
                      {client.spentSum}
                    </div>
                    <div
                      className={classNames(
                        statuses["Overdue"],
                        "rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                      )}
                    >
                      Overdue
                    </div>
                  </dd>
                </div>
              </dl>
              <dl className="px-6 py-4 -my-3 text-sm leading-6 divide-y divide-gray-100">
                <div className="flex justify-between py-3 gap-x-4">
                  <dt className="text-gray-500">Residual sum</dt>
                  <dd className="flex items-start gap-x-2">
                    <div className="font-medium text-gray-900">
                      {client.residualSum}
                    </div>
                    <div
                      className={classNames(
                        statuses["Withdraw"],
                        "rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                      )}
                    >
                      Withdraw
                    </div>
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default withTranslation()(LogosCardWithDescriptions);
