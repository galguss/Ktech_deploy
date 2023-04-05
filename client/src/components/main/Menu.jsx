import "../../styles/menu.css";

function Menu({ items, nameInput, val }) {
  return (
    <datalist id={nameInput}>
      {items.map((obj, index) => (
        <option key={`item${index}`}>{obj[val]}</option>
      ))}
    </datalist>
  );
}

export default Menu;
