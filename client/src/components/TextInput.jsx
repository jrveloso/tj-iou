const TextInput = ({ name, placeholder, value, onChange }) => {
    const checkInputType = (type) => {
        switch(type) {
            case 'date':
                return 'date';
            case 'sku':
                return 'number';
            case 'name':
                return 'text';
        }
    }

  return (
    <div>
      <label htmlFor="sku"></label>
      <input
        name={name}
        type={checkInputType(name)}
        id="date"
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
};

export default TextInput;
