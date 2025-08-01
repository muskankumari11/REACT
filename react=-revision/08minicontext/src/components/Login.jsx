import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Destructure setUser correctly
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Set the user object correctly
        setUser({ username, password });
    };

    return (
        <div>
            <h2>Login</h2>
            <input 
                type='text'
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username'
                
            />
            {" "}
            <input 
                type='password' // Change input type to password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password'
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
