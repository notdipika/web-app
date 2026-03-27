import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [items, setItems] = useState(["Apple", "Banana", "Mango"]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() === "") return;

    setItems([...items, input]);
    setInput("");
  };

  const deleteItem = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Parent Component</h2>

        <input
          type="text"
          placeholder="Add item..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={addItem}>Add Item</button>
        <Child items={items} deleteItem={deleteItem} />
      </div>
    </div>
  );
}
