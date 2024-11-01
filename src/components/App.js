import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import {useState} from 'react'

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [toDoList, setToDoList] = useState(TASKS)
  const [selectedCategories, setSelectedCategories] = useState('All')

      return (
  <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter Categories={CATEGORIES} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}/>
      <NewTaskForm Categories={CATEGORIES} toDoList={toDoList} setToDoList={setToDoList}/>
      <TaskList Tasks={TASKS} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} toDoList={toDoList} setToDoList={setToDoList}/>
    </div>
  );
}

export default App;
