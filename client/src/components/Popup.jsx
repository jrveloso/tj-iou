import Form from "./Form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Popup = ({ type, handleChange, value, handleSubmit }) => {
  const pay = type === "pay";
  const payOrSubmit = pay ? "pay" : "submit";
  return (
    <>
      <button
        className={
          pay ? "btn btn-primary text-white fixed bottom-20 w-7/8" : "btn btn-info fixed right-3 bottom-20"
        }
        onClick={() => document.getElementById(payOrSubmit).showModal()}
      >
        {pay ? "Pay" : (
          <FontAwesomeIcon icon={faPlus} />
        )}
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
