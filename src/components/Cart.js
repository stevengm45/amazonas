import React from "react";

function Cart() {
  const cart = JSON.parse(localStorage.getItem("Cart"));
  let total = 0;
  return (
    <div className="px-6 pt-4 pb-2">
      {cart.map((product) => {
        total += Number(product.price);
        return (
          <div className="flex mb-2 items-center" key={product.id}>
            <img className="w-28" src={product.image} alt="product" />
            <p className="m-2">{product.name}</p>
            <p className="m-2 text-base font-semibold">$ {product.price}</p>
          </div>
        );
      })}
      <div>
        <span className="text-base font-bold">Total:</span> $ {total}
      </div>
    </div>
  );
}

export default Cart;