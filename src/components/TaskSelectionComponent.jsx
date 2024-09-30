import React, { useState } from "react";

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
        <div
          className={`p-4 border rounded-lg flex justify-between items-center cursor-pointer ${
            selectedTasks.projectManagement
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300"
          }`}
          onClick={() => {
            handleTaskChange("projectManagement");
          }}
          role="button"
        >
          <input
            type="checkbox"
            checked={selectedTasks.projectManagement}
            readOnly
            className="mr-3"
          />
          <span className="text-left">Управление проектами и задачами</span>
        </div>

        <div
          className={`p-4 border rounded-lg flex justify-between items-center cursor-pointer ${
            selectedTasks.crmManagement
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300"
          }`}
          onClick={() => {
            handleTaskChange("crmManagement");
          }}
          role="button"
        >
          <input
            type="checkbox"
            checked={selectedTasks.crmManagement}
            readOnly
            className="mr-3"
          />
          <span className="text-left">
            Ведение сделок и базы клиентов в CRM
          </span>
        </div>

        <div
          className={`p-4 border rounded-lg flex justify-between items-center cursor-pointer ${
            selectedTasks.invoicing
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300"
          }`}
          onClick={() => {
            handleTaskChange("invoicing");
          }}
          role="button"
        >
          <input
            type="checkbox"
            checked={selectedTasks.invoicing}
            readOnly
            className="mr-3"
          />
          <span className="text-left">Выставление счетов и актов</span>
        </div>

        <div
          className={`p-4 border rounded-lg flex justify-between items-center cursor-pointer ${
            selectedTasks.financialManagement
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300"
          }`}
          onClick={() => {
            handleTaskChange("financialManagement");
          }}
          role="button"
        >
          <input
            type="checkbox"
            checked={selectedTasks.financialManagement}
            readOnly
            className="mr-3"
          />
          <span className="text-left">Учет финансов</span>
        </div>

        <div
          className={`p-4 border rounded-lg flex justify-between items-center cursor-pointer ${
            selectedTasks.knowledgeBase
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300"
          }`}
          onClick={() => {
            handleTaskChange("knowledgeBase");
          }}
          role="button"
        >
          <input
            type="checkbox"
            checked={selectedTasks.knowledgeBase}
            readOnly
            className="mr-3"
          />
          <span className="text-left">Ведение базы знаний</span>
        </div>

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
