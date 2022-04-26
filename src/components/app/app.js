import React from "react";
import './app.css';
import Header from "../header";
import { BrowserRouter, Route, Routes, } from "react-router-dom";


import { CartPage,
        HomePage       
} from '../pages';

const App = () => {
    return (
        <main role='main' className="container">
            <Header numItems={5} total={200} />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/cart' element={<CartPage />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
};

export default App;


