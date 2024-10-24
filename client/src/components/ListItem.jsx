import React from "react";

const ListItem = ({ id, name, sku, handleClick }) => {
  return (
    <li
      className="py-1 border-solid border-b-2 border-gray-200"
      key={id}
      onClick={() => handleClick(id)}
    >
      {name} - {sku}
    </li>
  );
};

export default ListItem;
