import React, {useState} from 'react';
import { fetchReadProducts } from '../services/api';

const ReadProduct = () =>{
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(10);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetchReadProducts(skip,limit);
            alert('Read successful, look into Console');
            console.log(response);
        }
        catch(error){
            alert('Read failed');
            console.error('Read failed', error);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>Read Products</div>
            <label htmlFor='skip'>Skip:
                <input
                    type='number'
                    value={skip}
                    onChange={(e) => setSkip(e.target.value)}
                    required
                />
            </label>
            <br/>
            <label htmlFor='limit'>Limit:
                <input
                    type='number'
                    value={limit}
                    onChange={(e) => setLimit(e.target.value)}
                    required
                />
            </label>
            <br/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}

export default ReadProduct;