import React from "react";

interface Iprops {
  pd: {
    category: string,
    name: string,
    img: string
  },

  addToCart: () => void,
}
const Product = ({pd, addToCart }: Iprops) => {
    const {img,name,category} = pd;
  return (
    <div>
      <img src={img} alt="" />
      <h4>product name: {name}</h4>
      <h4>category: {category}</h4>
      <button onClick={() => addToCart(pd)}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
