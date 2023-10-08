import React, { useState } from 'react';

import './ToDoList.css';
import axios from 'axios';
import HeadComponent from './Header/HeadComponent';
import FooterComponent from '../Footer/FooterComponent';


import TaskTypesComponent from './TaskTypesComponent';
import TaskItemComponent from './TaskItemComponent';
import Footertodocomponent from './Footertodocomponent';
import Headertodocomponents from './Headertodocomponents';

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
      axios.post('http://localhost:8082/crud', { text: newTaskText })
        .then(response => {
          const newTask = {
            id: response.data.id,
            text: newTaskText,
            completed: false
          };
          setTasks(prevTasks => [...prevTasks, newTask]);
          setNewTaskText('');
        })
        .catch(error => console.error('Error adding task:', error));
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
    <div className='main'>
      <div className="head-container">
        <HeadComponent />
        
      </div>
    
      
      <div className="todo-container">
        <Headertodocomponents
          handleInputChange={handleInputChange}
          handleAddTask={handleAddTask}
          newTaskText={newTaskText}
          isEditing={isEditing}
        />

        <hr />
        <TaskTypesComponent
          allTasksCount={allTasksCount}
          incompleteTasksCount={incompleteTasksCount}
          completeTasksCount={completeTasksCount}
        />
        <hr />
        <div className="tasks">
          {tasks.map((task) => (
            <TaskItemComponent
              key={task.id}
              task={task}
              handleToggleComplete={handleToggleComplete}
              handleDeleteTask={handleDeleteTask}
              handleEditTask={handleEditTask}
              selectedTask={selectedTask}
              isEditing={isEditing}
              newTaskText={newTaskText}
              setNewTaskText={setNewTaskText}
            />
          ))}
        </div>
        <Footertodocomponent
          handleUpdateTask={handleUpdateTask}
          isEditing={isEditing}
        />
      </div>
      { <div className="foter-container">
        <FooterComponent />
        
      </div> }

    </div>
  );
};

export default ToDoList;
