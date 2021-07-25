import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import { IProduct } from '../Shop/Shop';

interface Params{
    key: string
}
const ProductDetail = () => {
    const {key} = useParams<Params>();
    const data:any = fakeData.find(pd => pd.key === key)
    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    );
};

export default ProductDetail;