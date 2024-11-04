
const Form = ({sku, name, handleSubmit, setSku, setName}) => {
  return (
    <form onSubmit={handleSubmit} method='dialog'>
        <div className="pb-2">
          <label htmlFor="sku"></label>
          <input
            type="number"
            id="sku"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            required
            placeholder="SKU"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="pb-2">
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
  )
}

export default Form