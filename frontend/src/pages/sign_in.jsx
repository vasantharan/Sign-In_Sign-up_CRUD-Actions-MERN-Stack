import React from 'react';
import SignIn from '../components/signin';
import { Link } from 'react-router-dom';

const SignInPage = () => {
    return (
        <div className="container mt-5">
            <SignIn />
            <div className="mt-3">
                <Link to="/" className="btn btn-secondary">Go to Home Page</Link>
            </div>
        </div>
    );
};

export default SignInPage;
