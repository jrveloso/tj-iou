import React, { useEffect, useState } from "react";
import List from "../components/List";
import { useAuth } from "../contexts/AuthContext";

const IOUList = () => {
  const [date, setDate] = useState("");
  const [sku, setSku] = useState();
  const [name, setName] = useState("");
  const [ious, setIOUs] = useState([]);
  const { user } = useAuth();
  const [userID, setUserId] = useState(user.username);

  useEffect(() => {
    const fetchIOUs = async () => {
      const response = await fetch("http://localhost:5003/api/ious");
      const data = await response.json();
      const dateObj = new Date(data[0].date);
      console.log(dateObj.toLocaleDateString());

      const unpaid = data.filter(
        (iou) => iou.paid === false && iou.userID === userID
      );

      setIOUs(unpaid);
    };
    fetchIOUs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5003/api/ious/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date, sku, name, userID }),
    });
    if (response.ok) {
      const newIOU = await response.json();
      setIOUs((prevIOUs) => [...prevIOUs, newIOU]);
    } else {
      alert("IOU failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Submit an IOU</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="sku"></label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            placeholder="Date"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <label htmlFor="sku"></label>
          <input
            type="number"
            id="sku"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            required
            placeholder="SKU"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <List ious={ious} setIOUs={setIOUs} userID={userID} />
    </div>
  );
};

export default IOUList;
