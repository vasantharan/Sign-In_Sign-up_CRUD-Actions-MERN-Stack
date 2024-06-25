import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import SignInPage from './pages/sign_in';
import SignUpPage from './pages/sign_up';
import Data from './pages/data_page';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path='/signup' element={<SignUpPage/>} />
                <Route path='/data' element={<Data/>} />
            </Routes>
        </Router>
    );
};

export default App;
