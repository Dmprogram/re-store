import React from "react";
import './app.css';
import { BrowserRouter, Route, Routes, } from "react-router-dom";


import { CartPage,
        HomePage       
} from '../pages';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<CartPage />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;


