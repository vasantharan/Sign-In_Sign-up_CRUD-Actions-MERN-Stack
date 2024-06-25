import React from 'react';
import SignUp from '../components/signup';
import { Link } from 'react-router-dom';

const SignUpPage = () => {

    return (
        <div className="container mt-5">
            <SignUp />
            <div className="mt-3">
                <Link to="/" className="btn btn-secondary">Go to Home Page</Link>
            </div>
        </div>
    );
};

export default SignUpPage;