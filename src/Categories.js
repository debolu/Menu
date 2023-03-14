import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      { categories.map((category, index) => {
        return (
          <div key={index}>
          <button
            
            type="button"
            className="filter-btn"
            onClick={() => {filterItems(category);}}
          >
            {category}
          </button>
          </div>
        );
      }) }

{/* correct the code above to replace the buttons  below to make the buttons render dynamically
 based on the numer of categories present in the data */}
      {/* <button className="filter-btn" onClick={() => {filterItems('all');}}>All</button>
      <button className="filter-btn" onClick={() => {filterItems('breakfast');}}>Breakfast</button>
      <button className="filter-btn" onClick={() => {filterItems('lunch');}}>Lunch</button>
      <button className="filter-btn" onClick={() => {filterItems('shakes');}}>Shakes</button> */}
    </div>
  );
};

export default Categories;
