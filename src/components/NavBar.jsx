import React from "react";

const NavBar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <a href="/login">Login</a>
                </li>
                <li>
                    <a href="/register">Register</a>
                </li>
                <li>
                    <a href="/products/register">Register Product</a>
                </li>
                <li>
                    <a href="/products/read">Read Products</a>
                </li>
                <li>
                    <a href="/products/update">Update Product</a>
                </li>
                <li>
                    <a href="/products/delete">Delete Product</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;