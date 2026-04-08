// function Cart() {
//   return (
//     <div>
//       <h1>Cart Page</h1>
//     </div>
//   );
// }

// export default Cart;


import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container">
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="grid">
          {cart.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} />

              <h3>{item.title}</h3>

              <p>₹ {item.price}</p>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;