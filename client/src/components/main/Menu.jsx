import "../../styles/menu.css";

function Menu({ items, nameInput, val }) {
  return (
    <datalist id={nameInput}>
      {items.map((obj, index) => (
        <option key={`item${index}`}>{typeof val !=='undefined' ? obj[val] : obj}</option>
      ))}
    </datalist>
  );
}

export default Menu;
