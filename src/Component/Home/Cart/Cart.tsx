import React from 'react';
import { IProduct } from "../Shop/Shop";

type IProps = {
    cart:IProduct[]
}


const Cart = ({cart}:IProps) => {

    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        sum = sum + element.price;
        
    }
    const tax = sum * 10 /100;

    const convert = (num:number)=>{
        const n = num.toFixed(2);
        return(Number(n))
    }
    return (
        <div>
            <h3>This is cart:{cart.length}</h3>
            <p>Price: {convert(sum)}</p>
            <p>Tax: {convert(tax)}</p>
            <p>Total: {convert(sum + tax)}</p>

        </div>
    );
};

export default Cart;