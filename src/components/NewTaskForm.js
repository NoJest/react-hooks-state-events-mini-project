import React from "react";
import {useState} from 'react';

//make it a controlled component 

// make it submit and add a new task to the list
function NewTaskForm( {Categories, toDoList, setToDoList}) {
  const [newDetails, setNewDetails] = useState("")
  const [newCategory,setNewCategory] = useState("")

  const handleNewDetails = (e) => setNewDetails(e.target.value)
  const handleNewCategory = (e) => setNewCategory(e.target.value)

  function resetForm(){
    setNewDetails("")
    setNewCategory("")
  }

  function onTaskFormSubmit(e){
    e.preventDefault()
    const newTask = {
        key:newDetails,
        text:newDetails,
        category:newCategory
    }
    const updatedToDoList=[...toDoList, newTask]
    setToDoList(updatedToDoList)
    console.log(updatedToDoList)
    resetForm()   
  }

  const categoryOptions = Categories.filter((category) => category !== 'All');
  const createOptions = categoryOptions.map((Options) => (
    <option key={Options}>{Options}</option>
  ))
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="newDetails" onChange={handleNewDetails} value={newDetails}  />
      </label>
      <label>
        Category
        <select name="category" onChange={handleNewCategory} value = {newCategory}>
          {createOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
