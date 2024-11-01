import React from "react";


function CategoryFilter({Categories, selectedCategories, setSelectedCategories}) {

 

   function handleClick(category) {
      setSelectedCategories(selectedCategories === category ? "" : category)
      
   }
   const currentCategories = Categories.map( category => 
   <button
     key={category} 
     className={selectedCategories === category ? 'selected' : ''} 
     onClick={() => handleClick(category)}> 
     {category} 
    </button>)
   
 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {currentCategories}
    </div>
  );
}

export default CategoryFilter;
