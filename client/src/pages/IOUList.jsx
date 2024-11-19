import React, { useEffect, useState } from "react";
import List from "../components/List";
import { useAuth } from "../contexts/AuthContext";
import Alert from "../components/Alert";
import Popup from "../components/Popup";
import Form from "../components/Form";

const IOUList = () => {
  const [form, setForm] = useState({
    sku: { id: 1, type: "number", inputValue: "" },
    name: { id: 2, type: "text", inputValue: "" },
  });
  const [ious, setIOUs] = useState([]);
  const { user } = useAuth();
  const [userID, setUserId] = useState(user.username);
  const [alert, setAlert] = useState(false);
  const formArray = Object.entries(form);

  useEffect(() => {
    const fetchIOUs = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}api/ious`);
      const data = await response.json();
      const unpaid = data.filter(
        (iou) => iou.paid === false && iou.userID === user.username
      );

      setIOUs(unpaid);
    };
    fetchIOUs();
  }, []);

  const handleChange = (e) => {
    const {
      target: { value, name },
    } = e;
    setForm({
      ...form,
      [name]: {
        ...form[name],
        inputValue: value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const date = new Date().toLocaleDateString();
    const userID = user.username;
    const sku = form.sku.inputValue;
    const name = form.name.inputValue;
    const fullName = `${user.firstName} ${user.lastName}`;

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/ious/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date, sku, name, userID, fullName }),
    });

    if (response.ok) {
      const newIOU = await response.json();
      setIOUs((prevIOUs) => [...prevIOUs, newIOU]);
    } else {
      setAlert(true);
    }

    document.getElementById("submit").close();

    setForm({
      sku: { id: 1, type: "number", inputValue: "" },
      name: { id: 2, type: "text", inputValue: "" },
    });
  };

  const showAlert = () => {
    setAlert(false);
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-screen-2xl min-h-screen">
      <section className="hidden lg:w-1/4 bg-slate-100 lg:flex lg:flex-col justify-start px-4 pt-4">
        <h2 className="font-bold text-lg">Submit an IOU</h2>
        <Form
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formArray={formArray}
        />
      </section>
      <section className="flex flex-col lg:w-3/4 px-4">
        <h1 className="my-2">{user.firstName}'s IOUs</h1>
        <List
          ious={ious}
          setIOUs={setIOUs}
          userID={user.username}
          setAlert={setAlert}
        />
        <span className="lg:hidden">
          <Popup
            type={""}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            value={formArray}
          />
        </span>
        {alert && <Alert removeAlert={showAlert} ious={ious} />}
      </section>
    </div>
  );
};

export default IOUList;
