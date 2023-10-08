import React from 'react';
import './ToDoList.css';

const Footertodocomponent = ({ handleUpdateTask, isEditing }) => {
  return (
    <div className="footer">
      <button onClick={handleUpdateTask} disabled={!isEditing}>
        Update
      </button>
    </div>
  );
};

export default Footertodocomponent;
