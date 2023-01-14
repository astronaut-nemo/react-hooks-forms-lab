import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import {v4 as uuid} from "uuid";

function ShoppingList({ items, setItems }) {
  // States and Setters
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce",
  })

  // Event Handlers
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    setSearch(event.target.value);
  }

  // Make form inputs controlled
  function handleFormChange(event){
    console.log('Event Target: ', event.target.name)
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: [value]
    })
  }

  function handleFormSubmit(event){
    event.preventDefault();
    console.log(formData)

    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: formData.name,
      category: formData.category,
    }
    
    // Add newItem to items array
    setItems([
      ...items,
      newItem
    ])
  }

  // Filter through the categories of items and the name of the items
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    
    // console.log(Boolean(item.category === selectedCategory))
    return item.category === selectedCategory;
  }).filter((item) => item.name.includes(search))

  // Component Returns
  return (
    <div className="ShoppingList">
      {/* Item Form Component */}
      <ItemForm formData={formData} onFormChange={handleFormChange} onItemFormSubmit={handleFormSubmit}/>

      {/* Filter Component */}
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={handleSearchChange}/>
      
      {/* List Render Area */}
      <ul className="Items">
        {/* Display the filtered list */}
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
