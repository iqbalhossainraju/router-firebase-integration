import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register Now</h2>
            <form>
                <input type="text" placeholder="Enter Your Name" />
                <br />
                <input type="email" id="" placeholder="Enter your email" />
                <br />
                <input type="password" id="" placeholder="Enter your password" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;