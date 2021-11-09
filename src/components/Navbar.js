import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav-bar'>
      <h1>My Cool Shop</h1>
      <ul>
        <Link to='/'>
          {' '}
          <li>Home Page</li>
        </Link>
        <Link to='shop'>
          <li>Store</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Navbar;
