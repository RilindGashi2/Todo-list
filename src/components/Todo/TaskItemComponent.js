import React from 'react';
import './ToDoList.css';

const TaskItemComponent = ({ task, handleToggleComplete, handleDeleteTask, handleEditTask, selectedTask, isEditing, newTaskText, setNewTaskText }) => {
  return (
    <div key={task.id} className="task">
      <input
        type="checkbox"
        className="checkbox"
        checked={task.completed}
        onChange={() => handleToggleComplete(task.id)}
      />
      {task.id === selectedTask?.id && isEditing ? (
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
      ) : (
        task.text
      )}
      <button className='delete-btn' onClick={() => handleDeleteTask(task.id)}>Delete</button>
      <button className='edit-btn' onClick={() => handleEditTask(task)}>Edit</button>
    </div>
  );
};

export default TaskItemComponent;
