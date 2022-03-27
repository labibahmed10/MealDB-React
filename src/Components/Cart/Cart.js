import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Your choosen foods</h2>
      <p>Total Orders : {cart.length}</p>
    </div>
  );
};

export default Cart;
