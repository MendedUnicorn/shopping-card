const ShoppingBanner = ({ qnt, price, onClick }) => {
  return (
    <div className='shopping-bar'>
      <div className='shopping-cart-assembly' onClick={onClick}>
        <span className='material-icons shopping-cart-icon'>shopping_cart</span>
        <div className='qnt-circle'>{qnt ? qnt : 0} </div>
        <p className='total-price'>
          ${price ? Math.round(price * 100) / 100 : 0}
        </p>
      </div>
    </div>
  );
};

export default ShoppingBanner;
