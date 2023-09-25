import React, { useState } from 'react';
import './ToDoList.css';
import { BsPlusCircle } from 'react-icons/bs';

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: false }
  ]);
  const [newTaskText, setNewTaskText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleInputChange = (e) => {
    setNewTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (newTaskText.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        text: newTaskText,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setNewTaskText('');
    }
  };

  const handleToggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (task) => {
    if (isEditing && selectedTask && task.id === selectedTask.id) {
      setNewTaskText('');
      setSelectedTask(null);
      setIsEditing(false);
    } else {
      setNewTaskText('');
      setSelectedTask(task);
      setIsEditing(true);
    }
  };

  const handleUpdateTask = () => {
    if (selectedTask) {
      const updatedTasks = tasks.map((task) =>
        task.id === selectedTask.id ? { ...task, text: newTaskText } : task
      );
      setTasks(updatedTasks);
      setIsEditing(false);
      setSelectedTask(null);
      setNewTaskText('');
    }
  };

  const allTasksCount = tasks.length;
  const incompleteTasksCount = tasks.filter(task => !task.completed).length;
  const completeTasksCount = tasks.filter(task => task.completed).length;

  return (
    <div className="todo-container">
      <div className="header">
        <input
          type="text"
          placeholder="Add a task"
          value={isEditing ? '' : newTaskText}
          onChange={handleInputChange}
          disabled={isEditing}
        />
        <button onClick={handleAddTask} disabled={isEditing} className='btn-add'>
          <BsPlusCircle />
        </button>
      </div>
      <hr />
      <div className="task-types">
        <div className="blue-bg">All Tasks ({allTasksCount})</div>
        <div className="red-bg">Incomplete Tasks ({incompleteTasksCount})</div>
        <div className="green-bg">Complete Tasks ({completeTasksCount})</div>
      </div>
      <hr />
      <div className="tasks">
        {tasks.map((task) => (
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
        ))}
      </div>
      <div className="footer">
        <button onClick={handleUpdateTask} disabled={!isEditing}>
          Update
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
