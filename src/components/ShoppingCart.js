const ShoppingCart = ({ cartItems }) => {
  return (
    <div className='shopping-cart'>
      <h2>Shopping Cart</h2>
      <table width='100%'>
        <tr>
          <th>Qty</th>
          <th>Item</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
        {cartItems.map((item) => (
          <tr>
            <td>{item.itemQnt}</td>
            <td>{item.itemId}</td>
            <td>{item.itemPrice}</td>
            <td>{Math.round(item.itemQnt * item.itemPrice * 100) / 100}</td>
          </tr>
        ))}
        <tr>
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
