import React from 'react';
import './ToDoList.css';

const TaskTypesComponent = ({ allTasksCount, incompleteTasksCount, completeTasksCount }) => {
  return (
    <div className="task-types">
      <div className="blue-bg">All Tasks ({allTasksCount})</div>
      <div className="red-bg">Incomplete Tasks ({incompleteTasksCount})</div>
      <div className="green-bg">Complete Tasks ({completeTasksCount})</div>
    </div>
  );
};

export default TaskTypesComponent;
