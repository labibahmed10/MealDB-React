import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Meals from "../Meals/Meals";
import "./Products.css";

const Products = () => {
  const [meals, setmeals] = useState([]);

  useEffect(() => {
    fetch("Product.json")
      .then((res) => res.json())
      .then((data) => setmeals(data.meals));
  }, []);

  //cart state

  const [cart, setCart] = useState([]);

  const handleAddToCart = (indiProduct) => {
    setCart([...cart, indiProduct]);
  };

  return (
    <section className="main-container">
      <div className="food-display">
        {meals.map((meal) => (
          <Meals key={meal.idMeal} meal={meal} handleAddToCart={handleAddToCart}></Meals>
        ))}
      </div>

      <div className="cart-site">
        <Cart cart={cart}></Cart>
      </div>
    </section>
  );
};

export default Products;
