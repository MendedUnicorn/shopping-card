import { useEffect, useState } from 'react';
import ShoppingBanner from './components/ShoppingBar';
import ShoppingCart from './components/ShoppingCart';

const Shop = (props) => {
  const fetchData = async () => {
    const jsonData = await fetch('https://fakestoreapi.com/products');
    const data = await jsonData.json();
    setItems(data);
  };

  const calculateTotalQuantity = (cart) => {
    if (cart.length > 0) {
      return cart.reduce((acc, curr) => {
        return acc + curr['itemQnt'];
      }, 0);
    }
  };
  const calculateTotalPrice = (cart) => {
    if (cart.length > 0) {
      return cart.reduce((acc, curr) => {
        return acc + curr['itemPrice'] * curr['itemQnt'];
      }, 0);
    }
  };

  const handleAddToCart = (e) => {
    console.log(e.target.parentElement.children[4].children[1].value);
    const itemClicked = e.target.parentElement;
    const price = +itemClicked.children[3].innerText;
    const id = +itemClicked.id;
    const qnt = +itemClicked.children[4].children[1].value;
    if (cart.some((e) => e.itemId == id)) {
      cart.map((item, i) => {
        if (item.itemId == id) {
          setCart([
            ...cart.slice(0, i),
            { itemId: id, itemPrice: price, itemQnt: item.itemQnt + qnt },
            ...cart.slice(i + 1),
          ]);
        }
      });
    } else {
      setCart([...cart, { itemId: id, itemPrice: +price, itemQnt: +qnt }]);
    }
  };

  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalQnt, setTotalQnt] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (cart) {
      console.log(
        cart.reduce((acc, curr) => {
          return acc + curr['itemPrice'] * curr.itemQnt;
        }, 0)
      );
      setTotalPrice(calculateTotalPrice(cart));
      setTotalQnt(calculateTotalQuantity(cart));
    }
  }, [cart]);

  return (
    <div className='shopping'>
      <ShoppingBanner
        qnt={totalQnt}
        price={totalPrice}
        onClick={() => setShowCart(!showCart)}
      />
      {showCart ? <ShoppingCart cartItems={cart} /> : null}
      <div className='shopping-items'>
        {items.map((item) => {
          const handleIncrement = (e) => {
            let input = document.getElementById(item.id + '-input');
            console.log(e.target);
            const val = input ? input.value : 0;

            input.value = +val + 1;
          };
          const handleDecrement = () => {
            let min = 0;
            let input = document.getElementById(item.id + '-input');
            input.value = Math.max(Number(min), Number(+input.value - 1));
          };

          const handleChange = (e) => {
            let input = document.getElementById(item.id + '-input');
            let { value, min } = e.target;
            input.value = Math.max(Number(min), Number(value));
          };

          return (
            <div className='item-card' key={item.id} id={item.id}>
              <img src={item.image} alt={item.title} />
              <p className='item-title'>{item.title}</p>
              <span>$</span>
              <p className='price'> {item.price}</p>{' '}
              <label className='qnt-input'>
                <button
                  className='item-qnt-increment'
                  onClick={handleIncrement}
                >
                  +
                </button>
                <input
                  type='number'
                  className='item-qnt'
                  id={item.id + '-input'}
                  defaultValue={0}
                  min={0}
                  onChange={handleChange}
                />
                <button
                  className='item-qnt-decrement'
                  onClick={handleDecrement}
                >
                  -
                </button>
              </label>
              <button onClick={handleAddToCart}>Add to Cart..</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
