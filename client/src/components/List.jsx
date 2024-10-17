import React, { useState } from "react";

const List = ({ ious, setIOUs, userID }) => {
  const [paid, setPaid] = useState([]);
  const [popup, setPopup] = useState(false);
  const [employeeID, setEmployeeID] = useState();

  const handleClick = (id) => {
    if (paid.includes(id)) {
      setPaid((prev) => prev.filter((iou) => iou !== id));
    } else {
      const newPaid = ious.find((iou) => iou._id === id);
      setPaid((prev) => [...prev, newPaid._id]);
    }
    console.log(paid);
  };

  const handlePay = () => {
    const items = ious.filter((iou) => paid.includes(iou._id));
    setPopup(true);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (userID === employeeID) {
      alert("Must have a coworker check you out");
      return;
    }

    const response = await fetch("http://localhost:5003/api/ious/pay", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: paid }),
    });
    if (response.ok) {
      alert(`${paid.length} IOUs paid successfully.`);
      setIOUs((prevList) => prevList.filter((iou) => !paid.includes(iou._id)));
    }

    setPopup(false);
  };

  return (
    <div>
      {popup && (
        <div>
          <form onSubmit={handleDelete}>
            <input
              type="number"
              value={employeeID}
              onChange={(e) => setEmployeeID(e.target.value)}
              required
              className="input input-bordered w-full max-w-xs"
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      )}
      <h3>List</h3>
      <ul>
        {ious.map((iou, i, a) => {
          if (i === 0 || iou.date !== a[i - 1].date) {
            console.log(iou)
            // const dateObj = new Date(iou.date);
            return (
              <>
                <h4>{iou.date}</h4>
                <li key={iou._id} onClick={() => handleClick(iou._id)}>
                  {iou.name} - {iou.sku}
                </li>
              </>
            );
          } else {
            return (
              <li key={iou._id} onClick={() => handleClick(iou._id)}>
                {iou.name} - {iou.sku}
              </li>
            );
          }
        })}
      </ul>
      <button onClick={handlePay} className="btn btn-primary">
        Pay
      </button>
    </div>
  );
};

export default List;
