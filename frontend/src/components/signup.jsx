import React, { useState } from 'react';
import { signUp } from '../api'; // Replace with actual API function for sign-up
import { Link, useNavigate } from 'react-router-dom';

const SignUp = ({ history }) => {
    const [formData, setFormData] = useState({
        name: '',
        rollno: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await signUp(formData);
            if (response === 'Account already exists') {
                setError('Account already exists');
                setSuccess('');
            } else {
                setSuccess('Sign up successful! Redirecting to Sign In page...');
                setError('');
                setFormData({ name: '', rollno: '', email: '', password: '' });
                setTimeout(() => {
                    navigate('/signin'); 
                }, 2000); 
            }
        } catch (error) {
            setError('Error signing up');
            setSuccess('');
            console.error('Error signing up', error);
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
                            <h3>Sign Up</h3>
                        </div>
                        <div className="card-body">
                            {error && <div className="alert alert-danger">{error}</div>}
                            {success && <div className="alert alert-success">{success}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter roll number"
                                        name="rollno"
                                        value={formData.rollno}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
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
                                    Sign Up
                                </button>
                                {loading && <div className="text-center"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div>}
                                <div className="mt-3 text-center">
                                    <p>Already have an account? <Link to="/signin" className="text-primary">Sign In</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
