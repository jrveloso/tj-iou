import React, { useEffect, useState } from "react";

const Admin = () => {
  const [ious, setIOUs] = useState([]);

  useEffect(() => {
    const fetchIOUs = async () => {
      const response = await fetch("http://localhost:5003/api/ious");
      const data = await response.json();

      const unpaid = data.filter((iou) => iou.paid === false);

      setIOUs(unpaid);
    };
    fetchIOUs();
  }, []);
  console.log(ious);

  return (
    <section className="flex flex-col">
      <h1 className="self-center py-2">Unpaid IOUs</h1>
      <div className="h-dvh overflow-x-auto">
      <table className="table table-pin-rows">
        {ious.map((iou, i, a) => {
          if (i === 0 || iou.date !== a[i - 1].date) {
            return (
              <>
                <thead>
                  <tr>
                    <th>{iou.date}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{iou.fullName}</td>
                    <td>{iou.name}</td>
                  </tr>
                </tbody>
              </>
            );
          } else {
            return (
              <tbody>
                <tr>
                  <td>{iou.fullName}</td>
                  <td>{iou.name}</td>
                </tr>
              </tbody>
            );
          }
        })}
      </table>
    </div>
    </section>
  );
};

export default Admin;
