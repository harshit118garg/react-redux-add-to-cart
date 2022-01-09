import React from "react";

const Item = (props) => {
  const { image, modal, price } = props;
  return (
    <>
      <div className="item">
        <div className="img-wrapper ">
          <img src={image} alt="iPhone" />
        </div>
        <div className="text-wrapper ">
          <span>{modal}</span>
          <br />
          <span>Price : {price} only</span>
        </div>
        <div className="btn-wrapper ">
          <button>
            Add to Cart &nbsp;
            <i className="fas fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
