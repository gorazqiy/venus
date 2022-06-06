import { Route, Routes } from 'react-router-dom';
import './App.scss';

import Header from './components/Header';
import Home from './pages/HomePage';
import Cart from './pages/CartPage';
import Favorites from './pages/FavoritesPage';
import Auth from './pages/AuthPage';
import NotFound from './pages/NotFoundPage';
import Product from './pages/ProductPage';
import Profile from './pages/ProfilePage';

function App() {
  return (
    <div className="wrapper">

      <Header />

      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
