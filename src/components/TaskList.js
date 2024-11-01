import React from "react";
import Task from './Task.js';
import {useState, useEffect} from 'react';

function TaskList( {Tasks, selectedCategories, setSelectedCategories, toDoList, setToDoList}) {

  


// const toDoList.map

// filter tasks based on category with dependencies on Tasks and selectedCategories
useEffect(() => {
  let filteredTasks;
  if (selectedCategories === 'All') {
    filteredTasks = Tasks;
  } else {
    filteredTasks=Tasks.filter(task => task.category === selectedCategories)};
    setToDoList(filteredTasks);
}, [Tasks, selectedCategories]);

  return (
    <>
    <div className="tasks">
    {toDoList.map((Tasks) => (
          <Task 
            key={Tasks.text} 
            text={Tasks.text} 
            category={Tasks.category} 
            toDoList={toDoList}
            setToDoList={setToDoList}
          />
        ))}
    {/* make this a a constant and then filter based on the selectedTasks */}
    
    </div>
    </>
  );
}

export default TaskList;
