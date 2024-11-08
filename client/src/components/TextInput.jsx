const TextInput = ({ name, type, placeholder, value, handleChange }) => {
  const checkInputType = (type) => {
    switch (type) {
      case "sku":
        return "number";
      case "name":
        return "text";
    }
  };

  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
      required
      placeholder={placeholder}
      className="input input-bordered w-full max-w-xs"
    />
  );
};

export default TextInput;
