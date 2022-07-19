import React from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import cardProvider from './store/cardProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarteHnadler = () => {
    setCartIsShown(true);
  }
  const hideCarteHnadler = () => {
    setCartIsShown(false);
  }

  return (
    <cardProvider>
      {cartIsShown && <Cart onClose={hideCarteHnadler} />}
      <Header onShowCart={showCarteHnadler}/>
      <main>
        <Meals/>
      </main>
    </cardProvider>
  );
}

export default App;
