import React, { useState } from "react";

const List = ({ ious, setIOUs }) => {
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
    console.log(items);
    setPopup(true);
  };

  const handleDelete = async (e) => {
    e.preventDefault()
    console.log(paid)

    const response = await fetch("http://localhost:5003/api/ious/delete", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: paid })
    })
    if(response.ok) {
        alert(`${paid.length} IOUs deleted successfully.`)
        setIOUs(prevList => prevList.filter(iou => !paid.includes(iou._id)))
    }

    setPopup(false);
  };

  return (
    <div>
      {popup && (
        <div>
          <form onSubmit={handleDelete}>
            <input type="number" value={employeeID} required />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      <h3>List</h3>
      <ul>
        {ious.map((iou) => (
          <li key={iou._id} onClick={() => handleClick(iou._id)}>
            {iou.name} - {iou.sku}
          </li>
        ))}
      </ul>
      <button onClick={handlePay}>Pay</button>
    </div>
  );
};

export default List;
