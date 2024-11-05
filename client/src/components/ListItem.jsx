import React from "react";

const ListItem = ({ id, name, sku, handleCheck, checkedItems }) => {
  return (
    <div className="form-control py-1 border-solid border-b-2 border-gray-100">
      <label className="cursor-pointer label">
        <input
          className="checkbox checkbox-info"
          type="checkbox"
          id={id}
          name={name}
          checked={checkedItems[id]}
          onChange={handleCheck}
        />
        {name} - {sku}
      </label>
    </div>
  );
};

export default ListItem;
