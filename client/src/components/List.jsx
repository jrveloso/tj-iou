import React, { useState, Fragment } from "react";
import ListItem from "./ListItem";
import Popup from "./Popup";

const List = ({ ious, setIOUs, userID, setAlert }) => {
  const checkedIOUs = {};
  for (const iou of ious) {
    checkedIOUs[iou._id] = false;
  }

  const [checkedItems, setCheckedItems] = useState(checkedIOUs);
  const [employeeID, setEmployeeID] = useState();

  const handleCheck = (e) => {
    const { id, checked } = e.target;

    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userID === employeeID) {
      alert("Must have a coworker check you out");
      return;
    }

    const paid = Object.keys(checkedItems);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/ious/pay`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: paid }),
    });
    if (response.ok) {
      setAlert(true);
      setIOUs((prevList) => prevList.filter((iou) => !paid.includes(iou._id)));
    }
    document.getElementById("pay").close();
    setEmployeeID("");
  };

  return (
    <div>
      <form className="py-2 flex flex-col">
        {ious.map((iou, i, a) => {
          if (i === 0 || iou.date !== a[i - 1].date) {
            return (
              <Fragment key={iou._id}>
                <h3 className="text-xl font-medium">{iou.date}</h3>
                <ListItem
                  id={iou._id}
                  name={iou.name}
                  sku={iou.sku}
                  handleCheck={handleCheck}
                  checkedItems={checkedItems}
                />
              </Fragment>
            );
          } else {
            return (
              <ListItem
                id={iou._id}
                key={iou._id}
                name={iou.name}
                sku={iou.sku}
                handleCheck={handleCheck}
                checkedItems={checkedItems}
              />
            );
          }
        })}
      </form>
      <Popup
        type={"pay"}
        handleChange={setEmployeeID}
        value={[employeeID]}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default List;
