import React, { useState } from "react";
function App() {
  const [product, setProduct] = useState({
    name: "",
    price: ""
  });
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState({});
  const [dark, setDark] = useState(false);
  const [rules, setRules] = useState(false);
  const [modal, setModal] = useState(false);
  const [removeId, setRemoveId] = useState(null);
  function addProduct(e) {
    e.preventDefault();
    setProducts([...products, product]);
    setQuantity({
      ...quantity,
      [products.length]: 1
    });




    setProduct({
      name: "",
      price: ""
    });
  }

  function increase(index) {
    setQuantity({
      ...quantity,
      [index]: (quantity[index] || 1) + 1});
  }



  function decrease(index) {
    if (quantity[index] > 1) {
      setQuantity({
        ...quantity,
        [index]: quantity[index] - 1
      });
    }
  }

  function removeProduct() {
    setProducts(
      products.filter((item, index) => index !== removeId)
    );

    setQuantity({});
    setModal(false);
  }

  return (
    <div
      style={{
        backgroundColor: dark ? "grey" : "white",
        color: dark ? "white" : "grey",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <h1>Shopping Cart</h1>

      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <h2>Add Product</h2>

      <form onSubmit={addProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={product.name}
          onChange={(e) =>
            setProduct({ ...product, name: e.target.value })
          }
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) =>
            setProduct({ ...product, price: e.target.value })
          }
          min="0"
          required
        />

        <button type="submit">Add Product</button>
      </form>

      <h2>Product List</h2>

      {products.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>

          <button onClick={() => decrease(index)}>-</button>

          <span> {quantity[index] || 1} </span>

          <button onClick={() => increase(index)}>+</button>

          <button
            onClick={() => {
              setRemoveId(index);
              setModal(true);
            }}
          >
            Remove
          </button>

          <hr />
        </div>
      ))}

      <h2>Products Below ₹1000</h2>

      {products
        .filter((item) => Number(item.price) < 1000)
        .map((item, index) => (
          <p key={index}>
            {item.name} - ₹{item.price}
          </p>
        ))}

      <h2>Shopping Rules</h2>

      <button onClick={() => setRules(!rules)}>
        {rules ? "Hide Rules" : "Show Rules"}
      </button>

      {rules && (
        <ul>
          <li>Check product price.</li>
          <li>Check product quantity.</li>
          <li>Confirm before removing a product.</li>
        </ul>
      )}

      {modal && (
        <div
          style={{
            backgroundColor: "lightgray",
            color: "black",
            padding: "20px",
            marginTop: "20px"
          }}
        >
          <h3>Are you sure you want to remove?</h3>

          <button onClick={removeProduct}>Yes</button>

          <button onClick={() => setModal(false)}>No</button>
        </div>
      )}
    </div>
  );
}

export default App;
