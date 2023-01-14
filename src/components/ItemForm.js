import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit, formData, onFormChange }) {
  return (
    <form
      className="NewItem"
      onSubmit={onItemFormSubmit}
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="New Item"
          onChange={onFormChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={formData.category}
          onChange={onFormChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
