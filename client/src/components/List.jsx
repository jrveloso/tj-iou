import React, { useState } from "react";
import ListItem from "./ListItem";

const List = ({ ious, setIOUs, userID, setAlert }) => {
  const checkedIOUs = {}
  for(const iou of ious) {
    checkedIOUs[iou._id] = false
  }
  // console.log(checkedIOUs)
  const [checkedItems, setCheckedItems] = useState(checkedIOUs);
  const [popup, setPopup] = useState(false);
  const [employeeID, setEmployeeID] = useState();

  const handleCheck = (e) => {
    // if (paid.includes(id)) {
    //   setPaid((prev) => prev.filter((iou) => iou !== id));
    // } else {
    //   const newPaid = ious.find((iou) => iou._id === id);
    //   setPaid((prev) => [...prev, newPaid._id]);
    // }
    // console.log(paid);
    const { id, checked } = e.target
    console.log(e)
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: checked,
    }))
  };

  const handlePay = (e) => {
    e.preventDefault()
    // const items = ious.filter((iou) => paid.includes(iou._id));
    setPopup(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userID === employeeID) {
      alert("Must have a coworker check you out");
      return;
    }
    // console.log(checkedIOUs)
    const paid = Object.keys(checkedItems)
    // console.log(paid)

    const response = await fetch("http://localhost:5003/api/ious/pay", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: paid }),
    });
    if (response.ok) {
      // alert(`${paid.length} IOUs paid successfully.`);
      setAlert(true)
      setIOUs((prevList) => prevList.filter((iou) => !paid.includes(iou._id)));
    }

    setPopup(false);
  };

  return (
    <div>
      {popup && (
        <div>
          <form onSubmit={handleSubmit}>
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
      )}
      <form className="py-2 flex flex-col">
        {ious.map((iou, i, a) => {
          if (i === 0 || iou.date !== a[i - 1].date) {
            return (
              <>
                <h3 className="text-xl font-medium">{iou.date}</h3>
                <ListItem id={iou._id} name={iou.name} sku={iou.sku} handleCheck={handleCheck} checkedItems={checkedItems}/>
              </>
            );
          } else {
            return (
              <ListItem id={iou._id} name={iou.name} sku={iou.sku} handleCheck={handleCheck} checkedItems={checkedItems}/>
            );
          }
        })}
      <button onClick={handlePay} className="btn btn-primary">
        Pay
      </button>
      </form>
    </div>
  );
};

export default List;
