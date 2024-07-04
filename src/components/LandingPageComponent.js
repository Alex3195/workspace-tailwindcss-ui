import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import meetingService from "../services/meetingService";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function InlineLinksAndAction({ t }) {
  const [meetings, setMeetings] = useState([]);
  useEffect(() => {
    meetingService.getMeeting().then((res) => {
      setMeetings(res.data);
    });
    return () => {};
  }, []);
  useEffect(() => {
    console.log("sdasd", meetings);
    return () => {};
  }, [meetings]);
  const handleDelete = async (id) => {
    meetingService.deleteMeeting(id).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="px-4 py-4">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            {t(`sidebar_menu_meeting`)}
          </h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link
            key={"Add"}
            to={"/meeting/add"}
            onClick={() => ({})}
            className="block px-3 py-2 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {t(`Add`)}
          </Link>
        </div>
      </div>
      <div className="px-4 py-4">
        <ul className="divide-y divide-gray-100">
          {meetings.map((item) => (
            <li key={item.id} className="flex justify-between py-5 gap-x-6">
              <div className="flex min-w-0 gap-x-4">
                <div className="flex-auto min-w-0">
                  <p className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer hover:underline">
                  {item.title}
                  </p>
                  <p className="flex mt-1 text-xs leading-5 text-gray-500">
                    <a href={item.link} className="truncate hover:underline">
                      {item.link}
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center shrink-0 gap-x-6">
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Starts at{" "}
                    <time dateTime={item.startTime}>{item.startTime}</time>
                  </p>
                  {item.startTime ? (
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Ends at{" "}
                      <time dateTime={item.endTime}>{item.endTime}</time>
                    </p>
                  ) : (
                    <div className="mt-1 flex items-center gap-x-1.5">
                      <div className="flex-none p-1 rounded-full bg-emerald-500/20">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <p className="text-xs leading-5 text-gray-500">Online</p>
                    </div>
                  )}
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
                          to={`/meeting/edit/${item.id}`}
                          onClick={() => ({})}
                          className={classNames(
                            focus ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm leading-6 text-gray-900"
                          )}
                        >
                          {t(`Edit`)}
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <div
                          onClick={() => handleDelete(item.id)}
                          className={classNames(
                            focus ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm leading-6 text-gray-900 cursor-pointer"
                          )}
                        >
                          Delete
                        </div>
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
export default withTranslation()(InlineLinksAndAction);
