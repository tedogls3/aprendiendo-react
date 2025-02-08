/* eslint-disable react/prop-types */
function CartItem({ product, addToCart }) {
  return (
    <li>
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>
      <footer>
        <small>{product.quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export default CartItem;
