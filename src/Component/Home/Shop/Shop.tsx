import React, { useState } from "react";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

// interface Iaddtocart {
//   category: string;
//   name: string;
//   img: string;
// }
export type IProduct = {
  category: string;
  name: string;
  img: string;
  price: number;
  key: string
}
const Shop = () => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const data = fakeData;
  console.log(cart);
  // const products: IProduct[] = data.map(pd => {
  //     return({
  //         name:pd.name,
  //         category:pd.category,
  //         img:pd.img
  //     })
  // })

  const addToCart = (pd: IProduct) => {
    console.log("hlw", pd.name, pd.img);
    setCart([...cart, pd]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9 productCon">
            {data.map((pd) => (
              <Product pd={pd} addToCart={addToCart} />
            ))}
        </div>
        <div className="col-md-3">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
