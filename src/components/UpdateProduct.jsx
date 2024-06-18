import React, { useState } from 'react';
import { fetchUpdateProduct } from '../services/api';

const UpdateProduct = () =>{
    const [description, setDescription] = useState('');
    const [image_url, setImage_url] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [product_id, setProduct_id] = useState(0);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetchUpdateProduct({description,image_url,name,price,quantity,product_id});
            alert('Product updated successfully');
            console.log(response);
        }
        catch(error){
            console.error('Product update failed', error);
            alert('Product update failed');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>Update Product</div>
            <label htmlFor='description'>Description:
                <input
                    type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>
            <br/>
            <label htmlFor='image_url'>Image URL:
                <input
                    type='text'
                    value={image_url}
                    onChange={(e) => setImage_url(e.target.value)}
                    required
                />
            </label>
            <br/>
            <label htmlFor='name'>Name:
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <br/>
            <label htmlFor='price'>Price:
                <input
                    type='number'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </label>
            <br/>
            <label htmlFor='quantity'>Quantity:
                <input
                    type='number'
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />
            </label>
            <br/>
            <label htmlFor='product_id'>Product ID:
                <input
                    type='number'
                    value={product_id}
                    onChange={(e) => setProduct_id(e.target.value)}
                    required
                />
            </label>
            <br/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}

export default UpdateProduct;