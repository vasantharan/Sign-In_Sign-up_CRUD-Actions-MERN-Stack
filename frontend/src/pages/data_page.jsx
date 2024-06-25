import React, { useState, useEffect } from 'react';
import { getUserData, signOut } from '../api'; 
import { useNavigate } from 'react-router-dom';

const Data = ({ history }) => {
    const [userData, setUserData] = useState({});
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getUserData(); 
                console.log(response)
                setUserData(response); 
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchData();
    }, []);

    const handleLogout = () => {
        signOut(); 
        navigate('/signin'); 
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h3>User Data</h3>
                </div>
                <div className="card-body">
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Roll Number:</strong> {userData.rollno}</p>
                    {/* Add more fields as per your user data structure */}
                    <button className="btn btn-primary" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Data;
