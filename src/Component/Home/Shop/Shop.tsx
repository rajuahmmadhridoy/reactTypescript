import React from "react";
import fakeData from "../../fakeData";
import Product from "../Home/Product/Product";

const Shop = () => {
  const data = fakeData;
  interface Iaddtocart {
    category: string;
    name: string;
    img: string;
  }
  const addToCart = (pd: Iaddtocart):Iaddtocart =>  {
    console.log("hlw");
    return(pd)
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          {data.map((pd) => (
            <Product addToCart={addToCart} pd={pd} />
          ))}
          {/* {data.map((pd) => (
            <Product  addToCart={addToCart} name={pd.name} img={pd.img} category={pd.category} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Shop;
