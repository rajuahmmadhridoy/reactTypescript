import React from "react";
import "./Product.css";
import { IProduct } from "../Shop/Shop";
import { Link } from "react-router-dom";

interface Iprops {
  pd: IProduct;
  addToCart: (pd: IProduct) => void;
}

const Product = ({ pd, addToCart }: Iprops) => {
  const { img, name, category, price, key } = pd;
  return (
    <div className="row singleProduct">
      <div className="col-md-3 productImg">
        <img src={img} alt="" />
      </div>
      <div className="col-md-9">
        <div className="productInfo">
          <h4>product name: {name}</h4>
          <h4>category: {category}</h4>
          <h4>Price: {price} $</h4>
          <button onClick={() => addToCart(pd)}>Add to cart</button>
          <Link to={`/product/${key}`}>see more</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
