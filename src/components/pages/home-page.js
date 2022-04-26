import React from "react";
import BookList from '../book-list';
import CartTable from "../cart-table";

const HomePage = () => {
    return (
        <div>
            <BookList />
            <CartTable />
        </div>
        
    );
};

export default HomePage;