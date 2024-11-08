import Form from "./Form";

const Popup = ({ type, handleChange, value, handleSubmit }) => {
  const pay = type === "pay";
  const payOrSubmit = pay ? "pay" : "submit";
  return (
    <>
      <button
        className={
          pay ? "btn btn-primary w-full" : "btn absolute right-3 bottom-20"
        }
        onClick={() => document.getElementById(payOrSubmit).showModal()}
      >
        {pay ? "Pay" : "+"}
      </button>
      <dialog id={payOrSubmit} className="modal">
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById(payOrSubmit).close()}
          >
            ✕
          </button>
          <h2 className="font-bold text-lg">
            {pay ? "Enter Employee ID" : "Submit an IOU"}
          </h2>
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formArray={value}
          />
        </div>
      </dialog>
    </>
  );
};

export default Popup;
