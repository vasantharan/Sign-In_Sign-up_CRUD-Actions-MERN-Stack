import React from 'react';
import { useState } from 'react';
import { signIn } from '../api'; 
import { Link, useNavigate } from 'react-router-dom';

const SignIn = ({ history }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await signIn(formData);
            console.log(response)  
            if (response.data.message === "Account doesn't exist") {
                setError("Account doesn't exist. Please check your credentials or sign up.");
            } else if (response.data.message === 'Wrong Password') {
                setError('Wrong password. Please try again.');
            } else if (response.data.message === 'Signed in') {
                setSuccess('Signed in')
                localStorage.setItem('token', response.data.token); 
                navigate('/data') 
            }
        } catch (error) {
            setError('Error signing in');
            console.error('Error signing in', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>Sign In</h3>
                        </div>
                        <div className="card-body">
                            {error && <div className="alert alert-danger">{error}</div>}
                            {success && <div className="alert alert-success">{success}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                                    Sign In
                                </button>
                                {loading && <div className="text-center"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div>}
                                <div className="mt-3 text-center">
                                    <p>Don't have an account? <Link to="/signup" className="text-primary">Sign Up</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
