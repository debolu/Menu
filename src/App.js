import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
const [ menuItems, setMenuItems ] = useState(items);
// const[ categories, setCategories ] = useState([]);

const filterItems = (category) => {
  const newItems = items.filter((item) => item.category === category)
  setMenuItems(newItems)
  if (category === "all") {
    setMenuItems(items)
  }
}

  return <main>
    <section className="menu section">
      <div className="title">
        <h2 className="title">Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItems = {filterItems} menuItems = {menuItems} />
      <Menu menuItems = {menuItems}/>
    </section>
  </main>;
}

export default App;
