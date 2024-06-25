import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="container mt-5">
            <h1>Welcome to the Home Page</h1>
            <p>This is the homepage of our application.</p>

            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Sign In</h5>
                            <p className="card-text">Already have an account? Sign in here.</p>
                            <Link to="/signin" className="btn btn-primary">Sign In</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Sign Up</h5>
                            <p className="card-text">Don't have an account? Sign up now.</p>
                            <Link to="/signup" className="btn btn-success">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
