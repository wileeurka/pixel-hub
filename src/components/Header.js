import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import Order from "./Order";

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));
  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} onDelete={props.onDelete} />
      ))}
      <p className="summa">Amount: {new Intl.NumberFormat().format(summa)}$</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Your cart is empty</h2>
    </div>
  );
};

export default function Header(props) {
  //хук
  const [openCard, setOpenCard] = useState(false);
  return (
    <header>
      <div>
        <span className="logo">Pixel Hub</span>
        <ul className="nav">
          <li>About Us</li>
          <li>Contact</li>
          <li>Office</li>
        </ul>
        <FaShoppingCart
          className={`shop-cart-button ${openCard && "active"}`}
          onClick={() => setOpenCard(!openCard)}
        />
        {openCard && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>

      <div className="presentation"></div>
    </header>
  );
}
