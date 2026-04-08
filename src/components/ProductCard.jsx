// function ProductCard({ product }) {
//   return (
//     <div className="card">
//       <img src={product.image} alt={product.title} />

//       <h3>{product.title}</h3>

//       <p>₹ {product.price}</p>

//       <button>Add to Cart</button>
//     </div>
//   );
// }

// export default ProductCard;


import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>

      <p>₹ {product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;