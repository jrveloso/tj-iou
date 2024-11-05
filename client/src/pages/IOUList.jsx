import React, { useEffect, useState } from "react";
import List from "../components/List";
import { useAuth } from "../contexts/AuthContext";
import Alert from "../components/Alert";
import Form from "../components/Form";

const IOUList = () => {
  // const [date, setDate] = useState("");
  const [sku, setSku] = useState();
  const [name, setName] = useState("");
  const [ious, setIOUs] = useState([]);
  const { user } = useAuth();
  const [userID, setUserId] = useState(user.username);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const fetchIOUs = async () => {
      const response = await fetch("http://localhost:5003/api/ious");
      const data = await response.json();

      const unpaid = data.filter(
        (iou) => iou.paid === false && iou.userID === userID
      );

      setIOUs(unpaid);
    };
    fetchIOUs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const date = new Date().toLocaleDateString();
    console.log(date);

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
      setAlert(true);
    }
  };

  const showAlert = () => {
    setAlert(false);
  };

  return (
    <div>
      <h1 className="my-2">{userID}'s IOUs</h1>
      <List ious={ious} setIOUs={setIOUs} userID={userID} setAlert={setAlert} />
      <button
        className="btn absolute right-3 bottom-20"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        +
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h2 className="font-bold text-lg">Submit an IOU</h2>
          <Form
            sku={sku}
            name={name}
            handleSubmit={handleSubmit}
            setSku={setSku}
            setName={setName}
          />
        </div>
      </dialog>
      {alert && <Alert removeAlert={showAlert} ious={ious} />}
    </div>
  );
};

export default IOUList;
