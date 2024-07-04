/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from '@headlessui/react'
import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Bars3Icon, ChevronRightIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { withTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Deployments', href: '#', icon: ServerIcon, current: true },
  { name: 'Activity', href: '#', icon: SignalIcon, current: false },
  { name: 'Domains', href: '#', icon: GlobeAltIcon, current: false },
  { name: 'Usage', href: '#', icon: ChartBarSquareIcon, current: false },
  { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false },
]
const teams = [
  { id: 1, name: 'Planetaria', href: '#', initial: 'P', current: false },
  { id: 2, name: 'Protocol', href: '#', initial: 'P', current: false },
  { id: 3, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
]
const statuses = {
  offline: 'text-gray-500 bg-gray-100/10',
  online: 'text-green-400 bg-green-400/10',
  error: 'text-rose-400 bg-rose-400/10',
}
const environments = {
  Preview: 'text-gray-400 bg-gray-400/10 ring-gray-400/20',
  Production: 'text-indigo-400 bg-indigo-400/10 ring-indigo-400/30',
}
const deployments = [
  {
    id: 1,
    href: '#',
    projectName: 'ios-app',
    teamName: 'Planetaria',
    status: 'offline',
    statusText: 'Initiated 1m 32s ago',
    description: 'Deploys from GitHub',
    environment: 'Preview',
  },

  {
    id: 2,
    href: '#',
    projectName: 'mobile-app',
    teamName: 'Planetaria',
    status: 'online',
    statusText: 'Initiated 3m ago',
    description: 'Deploys from GitHub',
    environment: 'Production',
  },

  {
    id: 3,
    href: '#',
    projectName: 'tailwindcss.com',
    teamName: 'TailwindsLab',
    status: 'offline',
    statusText: 'Initiated 1d ago',
    description: 'Deploys from GitHub',
    environment: 'Preview',
  },

  {
    id: 4,
    href: '#',
    projectName: 'relay-  service',
    teamName: 'Protocol',
    status: 'online',
    statusText: 'Initiated 1d ago',
    description: 'Deploys from GitHub',
    environment: 'Production',
  },

  {
    id: 5,
    href: '#',
    projectName: 'android-app',
    teamName: 'Planetaria',
    status: 'error',
    statusText: 'Failed to deploy 2d ago',
    description: 'Deploys from GitHub',
    environment: 'Preview',
  },
  // More deployments...
]
const activityItems = [
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'ios-app',
    commit: '2d89f0c8',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'ios-app',
    commit: '2d89f0c8',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'ios-app',
    commit: '2d89f0c8',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'ios-app',
    commit: '2d89f0c8',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'ios-app',
    commit: '2d89f0c8',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  // More items...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function LandingPageComponent({t}) {

  return (
    <div className="px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="">
        <div className="px-4 sm:px-6 lg:px-8 ">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-gray-900">
                {t(`sidebar_menu_meeting`)}
              </h1>
              {/* <p className="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name, title, email and role.
            </p> */}
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
        </div>
        <div className="">
          <main className="">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 sm:px-6 sm:py-4 lg:px-8" />
            {/* Deployment list */}
            <ul role="list" className="divide-y divide-white/5">
              {deployments.map((deployment) => (
                <li
                  key={deployment.id}
                  className="relative flex items-center px-4 py-4 space-x-4 sm:px-6 lg:px-8"
                >
                  <div className="flex-auto min-w-0">
                    <div className="flex items-center gap-x-3">
                      <div
                        className={classNames(
                          statuses[deployment.status],
                          "flex-none rounded-full p-1"
                        )}
                      >
                        <div className="w-2 h-2 bg-current rounded-full" />
                      </div>
                      <h2 className="min-w-0 text-sm font-semibold leading-6 text-gray-600">
                        <a href={deployment.href} className="flex gap-x-2">
                          <span className="truncate">
                            {deployment.teamName}
                          </span>
                          <span className="text-gray-400">/</span>
                          <span className="whitespace-nowrap">
                            {deployment.projectName}
                          </span>
                          <span className="absolute inset-0" />
                        </a>
                      </h2>
                    </div>
                    <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
                      <p className="truncate">{deployment.description}</p>
                      <svg
                        viewBox="0 0 2 2"
                        className="h-0.5 w-0.5 flex-none fill-gray-300"
                      >
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                      <p className="whitespace-nowrap">
                        {deployment.statusText}
                      </p>
                    </div>
                  </div>
                  <div
                    className={classNames(
                      environments[deployment.environment],
                      "flex-none rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset"
                    )}
                  >
                    {deployment.environment}
                  </div>
                  <ChevronRightIcon
                    className="flex-none w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          </main>
        </div>
      </div>
    </div>
  );
}
export default withTranslation()(LandingPageComponent);