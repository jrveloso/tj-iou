import React, { useState } from "react";
import ListItem from "./ListItem";

const List = ({ ious, setIOUs, userID, setAlert }) => {
  const checkedIOUs = {};
  for (const iou of ious) {
    checkedIOUs[iou._id] = false;
  }

  const [checkedItems, setCheckedItems] = useState(checkedIOUs);
  const [itemPopup, setItemPopup] = useState(false);
  const [employeeID, setEmployeeID] = useState();

  const handleCheck = (e) => {
    const { id, checked } = e.target;
    console.log(e);
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

    const response = await fetch("http://localhost:5003/api/ious/pay", {
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

    setItemPopup(false);
  };

  return (
    <div>
      <form className="py-2 flex flex-col">
        {ious.map((iou, i, a) => {
          if (i === 0 || iou.date !== a[i - 1].date) {
            return (
              <>
                <h3 className="text-xl font-medium">{iou.date}</h3>
                <ListItem
                  id={iou._id}
                  name={iou.name}
                  sku={iou.sku}
                  handleCheck={handleCheck}
                  checkedItems={checkedItems}
                />
              </>
            );
          } else {
            return (
              <ListItem
                id={iou._id}
                name={iou.name}
                sku={iou.sku}
                handleCheck={handleCheck}
                checkedItems={checkedItems}
              />
            );
          }
        })}
      </form>
      <>
      <button
        className="btn btn-primary w-full"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Pay
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <h3>Enter Employee ID</h3>
            <input
              type="number"
              value={employeeID}
              onChange={(e) => setEmployeeID(e.target.value)}
              required
              className="input input-bordered w-full max-w-xs mb-2"
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </dialog>
      </>
    </div>
  );
};

export default List;
