const ShoppingCart = ({ cartItems, onClick, removeFromCart }) => {
  return (
    <div className='shopping-cart'>
      <div className='close-cart' onClick={onClick}>
        x
      </div>
      <h2>Shopping Cart</h2>
      <table width='100%'>
        <tr>
          <th></th>
          <th>Qty</th>
          <th>Item</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
        {cartItems.map((item) => (
          <tr key={item.itemId} id={item.itemId}>
            <div className='delete-from-cart' onClick={removeFromCart}>
              x
            </div>
            <td>{item.itemQnt}</td>
            <td>{item.itemId}</td>
            <td>{item.itemPrice}</td>
            <td>{Math.round(item.itemQnt * item.itemPrice * 100) / 100}</td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td colSpan='2' className='total-price-cart'>
            Total Price:
            {' $' +
              Math.round(
                cartItems.reduce((acc, curr) => {
                  return acc + +curr.itemPrice * +curr.itemQnt;
                }, 0) * 100
              ) /
                100}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ShoppingCart;
