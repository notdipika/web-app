export default function Child({ items, deleteItem }) {
  return (
    <div className="list-box">
      <h3>Child Component (List)</h3>

      {items.length === 0 ? (
        <p>No items available</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}

              <button
                className="delete-btn"
                onClick={() => deleteItem(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
