import React, {useState} from "react";
import { fetchDeleteProduct } from "../services/api";

const DeleteProduct = () => {
    const [product_id, setProduct_id] = useState(0);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetchDeleteProduct(product_id);
            alert('Product deleted successfully');
            console.log(response);
        }
        catch(error){
            console.error('Product deletion failed', error);
            alert('Product deletion failed');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>Delete Product</div>
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

export default DeleteProduct;