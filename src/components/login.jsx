import React, { useState } from 'react';
import { fetchLogin } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetchLogin({password,username});
            alert('Login successful');
            console.log(response);
            navigate('/products/register');
        }
        catch(error){
            console.error('Login failed', error);
            alert('Login failed');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>Login</div>
            <label htmlFor='username'>Username:
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </label>
            <br/>
            <label htmlFor='password'>Password:
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <br/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}

export default Login;