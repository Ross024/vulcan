function ProductAdvisor() {
  return (
    <div className="product-advisor">
        <div className="product-advisor-heading">
            <h2>Product Advisor</h2>
            <p>Find your project's perfect fit.</p>
        </div>
        <div>
        <form className="pa-form" action="submit">
            <div className="select-type">
                <label htmlFor="product-type">Product Type</label>
                <select name="product-type" id="product-type">
                    <option value="">Select</option>
                    <option value="Lorem">Lorem</option>
                    <option value="Ipsum">Ipsum</option>
                    <option value="Dolor">Dolor</option>
                    <option value="Sit">Sit</option>
                </select>
            </div>
            <div className="select-type">
                <label htmlFor="screen-location">Screen Location</label>
                <select name="screen-location" id="screen-location">
                    <option value="">Select</option>
                    <option value="Lorem">Lorem</option>
                    <option value="Ipsum">Ipsum</option>
                    <option value="Dolor">Dolor</option>
                    <option value="Sit">Sit</option>
                </select>
            </div>
            <div className="select-type">
                <label htmlFor="flow-type">Flow Type</label>
                <select name="flow-type" id="flow-type">
                    <option value="">Select</option>
                    <option value="Lorem">Lorem</option>
                    <option value="Ipsum">Ipsum</option>
                    <option value="Dolor">Dolor</option>
                    <option value="Sit">Sit</option>
                </select>
            </div>
            <div className="select-type">
                <label htmlFor="channel-depth">Channel Depth</label>
                <select name="channel-depth" id="channel-depth">
                    <option value="">Select</option>
                    <option value="Lorem">Lorem</option>
                    <option value="Ipsum">Ipsum</option>
                    <option value="Dolor">Dolor</option>
                    <option value="Sit">Sit</option>
                </select>
            </div>
            <div className="select-type">
                <label htmlFor="channel-width">Channel Width</label>
                <select name="channel-width" id="channel-width">
                    <option value="">Select</option>
                    <option value="Lorem">Lorem</option>
                    <option value="Ipsum">Ipsum</option>
                    <option value="Dolor">Dolor</option>
                    <option value="Sit">Sit</option>
                </select>
            </div>
        </form>
        </div>
        <div>
            <button>Find My Product</button>
        </div>   
    </div>
  )
}

export default ProductAdvisor