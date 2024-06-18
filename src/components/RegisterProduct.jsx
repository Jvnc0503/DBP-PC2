import React, { useState} from "react";
import { fetchRegisterProduct } from "../services/api";

const RegisterProduct = () => {
    const [description, setDescription] = useState("");
    const [image_url, setImage_url] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetchRegisterProduct({description,image_url,name,price,quantity});
            alert('Product registered successfully');
            console.log(response);
        }
        catch(error){
            console.error('Product registration failed', error);
            alert('Product registration failed');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>Register Product</div>
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
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}

export default RegisterProduct;