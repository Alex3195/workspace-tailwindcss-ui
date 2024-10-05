import { BookOpenIcon, BriefcaseIcon, CheckCircleIcon, CurrencyDollarIcon, InboxIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
 // Import icons from Heroicons

function TaskSelection() {
  const [selectedTasks, setSelectedTasks] = useState({
    projectManagement: true,
    crmManagement: true,
    invoicing: true,
    financialManagement: true,
    knowledgeBase: true,
  });

  const handleTaskChange = (task) => {
    setSelectedTasks((prev) => ({
      ...prev,
      [task]: !prev[task],
    }));
  };

  const handleSelectAll = () => {
    const allSelected = Object.values(selectedTasks).every(Boolean);
    const newState = Object.keys(selectedTasks).reduce(
      (acc, task) => ({ ...acc, [task]: !allSelected }),
      {}
    );
    setSelectedTasks(newState);
  };

  return (
    <div className="p-6 text-center">
      <h2 className="mb-2 text-2xl font-semibold">
        Какую задачу хотите решить?
      </h2>
      <p className="mb-6 text-gray-500">Помогите определить ваши цели</p>

      <div className="grid max-w-lg grid-cols-2 gap-4 mx-auto mb-6">
        {/* Project Management Task */}
        <div
          className={`p-4 border rounded-lg flex justify-between items-center cursor-pointer ${
            selectedTasks.projectManagement
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300"
          }`}
          onClick={() => handleTaskChange("projectManagement")}
        >
          <BriefcaseIcon className="w-10 h-10 mr-3 text-blue-500" />
          <span className="text-left">Управление проектами и задачами</span>
          <input
            type="checkbox"
            checked={selectedTasks.projectManagement}
            readOnly
            className="ml-3"
          />
        </div>

        {/* CRM Management Task */}
        <div
          className={`p-4 border rounded-lg flex justify-between items-center cursor-pointer ${
            selectedTasks.crmManagement
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300"
          }`}
          onClick={() => handleTaskChange("crmManagement")}
        >
          <InboxIcon className="w-10 h-10 mr-3 text-blue-500 h-106" />
          <span className="text-left">
            Ведение сделок и базы клиентов в CRM
          </span>
          <input
            type="checkbox"
            checked={selectedTasks.crmManagement}
            readOnly
            className="ml-3"
          />
        </div>

        {/* Invoicing Task */}
        <div
          className={`p-4 border rounded-lg flex justify-between items-center cursor-pointer ${
            selectedTasks.invoicing
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300"
          }`}
          onClick={() => handleTaskChange("invoicing")}
        >
          <CheckCircleIcon className="w-10 h-10 mr-3 text-blue-500" />
          <span className="text-left">Выставление счетов и актов</span>
          <input
            type="checkbox"
            checked={selectedTasks.invoicing}
            readOnly
            className="ml-3"
          />
        </div>

        {/* Financial Management Task */}
        <div
          className={`p-4 border rounded-lg flex justify-between items-center cursor-pointer ${
            selectedTasks.financialManagement
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300"
          }`}
          onClick={() => handleTaskChange("financialManagement")}
        >
          <CurrencyDollarIcon className="w-10 h-10 mr-3 text-blue-500" />
          <span className="text-left">Учет финансов</span>
          <input
            type="checkbox"
            checked={selectedTasks.financialManagement}
            readOnly
            className="ml-3"
          />
        </div>

        {/* Knowledge Base Task */}
        <div
          className={`p-4 border rounded-lg flex justify-between items-center cursor-pointer ${
            selectedTasks.knowledgeBase
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300"
          }`}
          onClick={() => handleTaskChange("knowledgeBase")}
        >
          <BookOpenIcon className="w-10 h-10 mr-3 text-blue-500" />
          <span className="text-left">Ведение базы знаний</span>
          <input
            type="checkbox"
            checked={selectedTasks.knowledgeBase}
            readOnly
            className="ml-3"
          />
        </div>

        {/* Select All */}
        <div
          className="p-4 text-center text-blue-500 border border-blue-500 rounded-lg cursor-pointer hover:bg-blue-50"
          onClick={handleSelectAll}
        >
          <span>Выбрать все</span>
        </div>
      </div>

      <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
        Продолжить
      </button>
    </div>
  );
}

export default TaskSelection;
