import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = (show_cart = false) => {
    setCartIsShown(show_cart);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart showCart={showCart} />}
      <Header showCart={showCart}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
