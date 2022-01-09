import React from "react";
import Sdata from "../Sdata";
import Item from "./Item";

const Home = () => {
  return (
    <>
      <div className="topbar">
        Go To Cart
        <span className="carticon">
          <i className="fas fa-cart-plus"></i>
        </span>
      </div>
      <div className="cart-wrapper">
        {Sdata.map((phone) => {
          return (
            <Item
              key={phone.id}
              image={phone.image}
              modal={phone.modal}
              price={phone.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
