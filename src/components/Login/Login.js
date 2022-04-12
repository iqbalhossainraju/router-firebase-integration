import React from 'react';
import usefirebase from '../../hooks/usefirebase';

const Login = () => {
    const { signInWithGoogle } = usefirebase();
    return (
        <div>
            <h2>Please Login</h2>

            <div style={{ 'margin': '20px' }}>
                <button onClick={signInWithGoogle}> Google Sign In</button>
            </div>

            <form>
                <input type="email" id="" placeholder="Enter your email" />
                <br />
                <input type="password" id="" placeholder="Enter your password" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;