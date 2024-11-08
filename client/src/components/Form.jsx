import TextInput from "./TextInput";

const Form = ({ handleSubmit, handleChange, formArray }) => {
  const createPlaceholder = (name) => {
    switch (name) {
      case "sku":
        return "SKU";
      case "name":
        return "Product Name";
    }
  };

  return (
    <form onSubmit={handleSubmit} method="dialog">
      {formArray.map((input, i) => {
        if (formArray.length > 1) {
          const name = input[0];
          const { id, type, inputValue } = input[1];

          return (
            <div className="pb-2" id={id}>
              <TextInput name={name} type={type} value={inputValue} handleChange={handleChange} placeholder={createPlaceholder(name)}/>
              {/* <input
                name={name}
                type={type}
                value={inputValue}
                onChange={handleChange}
                required
                placeholder={createPlaceholder(name)}
                className="input input-bordered w-full max-w-xs"
              /> */}
            </div>
          );
        } else {
          return (
            <div className="pb-2" id={i}>
              <TextInput name={"Employee ID"} type={"number"} value={formArray[0]} handleChange={(e) => handleChange(e.target.value)} placeholder={"Employee ID"}/>
              {/* <input
                name="Employee ID"
                type="number"
                value={formArray[0]}
                onChange={(e) => handleChange(e.target.value)}
                required
                placeholder="Employee ID"
                className="input input-bordered w-full max-w-xs"
              /> */}
            </div>
          );
        }
      })}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
