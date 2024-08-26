import React, { useState } from "react";
import List from "../components/List";

const IOUList = () => {
  const [date, setDate] = useState(new Date());
  const [number, setNumber] = useState();
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5001/api/ious", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ number }),
    });
    if (response.ok) {
      alert(`IOU was successful.`);
      setSubmit(!submitted)
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
            value={number}
            onChange={(e) => setNumber(e.target.value)}
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
      <List submit={submit}/>
    </div>
  );
};

export default IOUList;
