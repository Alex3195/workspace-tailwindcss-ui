import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { selectLang, setLang } from '../features/langSlice';
const langMode = [
  {
    name: "local_en",
    icon: require('../assets/icons/united-states-of-america.png'),
    value: 'en'
  },
  {
    name: "local_ru",
    icon: require('../assets/icons/russia.png'),
    value: 'ru'
  },
  {
    name: "local_uz",
    icon: require('../assets/icons/uzbekistan.png'),
    value: 'uz'
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DropdownLanguage = () => {
  const language = useSelector(selectLang);
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [img, setImg] = useState(language ? langMode.find(item => item.value === language).icon : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfl1y2RlOZX1PfNpDurDjdDt--K2Dx0U9Ccw&usqp=CAU")
  React.useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);
  return (
    <>
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src={img} alt="" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-40 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {langMode.map((item) => (
              <Menu.Item
                key={item.name}
                onClick={() => {
                  dispatch(setLang(item.value));
                  i18next.changeLanguage(item.value);
                  setImg(item.icon)
                }}
              >
                {({ active }) => (
                  <div
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "px-4 py-2 text-[16px] text-gray-900 flex justify-between items-center cursor-pointer" 
                    )}
                  >
                    <img
                      className="w-8 h-8"
                      src={item.icon}
                      alt="dropdownimage"
                    />
                    {t(`${item.name}`)}

                  </div>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default DropdownLanguage;
