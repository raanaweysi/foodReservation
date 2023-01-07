import React from "react";
import { useState } from "react";
import Cart from "./component/Cart/cart";
import Header from "./component/layout/Header";
import Meals from "./component/Meals/Meals";
import MealSummery from "./component/Meals/mealSummery";
import CartProvider from "./store/cartProvider";


const App = (props) => {

  const [cartIsShown, setCartIshown] = useState(false);

  const handelCartShown = (props) => {
    setCartIshown(true);
  };

  const handelCartHiden = (props) => {
    setCartIshown(false);
  };


  return (
    
      <CartProvider>
        onClose: {handelCartHiden}
      {cartIsShown && <Cart onClose={handelCartHiden}/>}
      <Header onShown={handelCartShown}/>
      <MealSummery/>
      <main>
        <Meals/>
      </main>
      </CartProvider>
    
  );
}

export default App;
