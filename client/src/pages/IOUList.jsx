import React, { useEffect, useState } from "react";
import List from "../components/List";

const IOUList = () => {
  const [date, setDate] = useState(new Date());
  const [sku, setSku] = useState();
  const [name, setName] = useState("");
  const [ious, setIOUs] = useState([]);

  useEffect(() => {
    const fetchIOUs = async () => {
      const response = await fetch("http://localhost:5003/api/ious");
      const data = await response.json();
      console.log(data)

      setIOUs(data);
    };
    fetchIOUs();
  }, []);

  const handleSubmit = async (e) => {
    console.log(date, sku, name)
    e.preventDefault();

    const response = await fetch("http://localhost:5003/api/ious/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date, sku, name }),
    });
    if (response.ok) {
      const newIOU = await response.json()
      setIOUs((prevIOUs) => [...prevIOUs, newIOU])
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
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <List ious={ious} setIOUs={setIOUs} />
    </div>
  );
};

export default IOUList;
