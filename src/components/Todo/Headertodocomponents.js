import React from 'react';


import { BsPlusCircle } from 'react-icons/bs';
import './ToDoList.css';

const Headertodocomponents = ({ handleInputChange, handleAddTask, newTaskText, isEditing }) => {
  const onAddTask = () => {
    if (!isEditing) {
      console.log('Adding task:', newTaskText);
      handleAddTask();
    }
  };

  console.log('Rendering HeadertodoComponent with newTaskText:', newTaskText);

  return (
    <div className="header">
      <input
        type="text"
        placeholder="Add a task"
        value={newTaskText}
        onChange={handleInputChange}
        disabled={isEditing}
      />
      <button onClick={onAddTask} disabled={isEditing} className='btn-add'>
        <BsPlusCircle />
      </button>
    </div>
  );
};

export default Headertodocomponents;
