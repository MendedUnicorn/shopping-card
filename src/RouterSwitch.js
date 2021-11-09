import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
import ShoppingBanner from './components/ShoppingBar';
import Shopping from './Shop';

const RouterSwitch = () => {
  return (
    <Router>
      {/* <App /> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route
          path='shop'
          element={
            <Shopping>
              <ShoppingBanner />
            </Shopping>
          }
        />
      </Routes>
    </Router>
  );
};

export default RouterSwitch;
