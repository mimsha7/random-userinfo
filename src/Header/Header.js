import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <div className="header">
            <nav><a href="/users"><i className="fa-solid fa-user-plus"></i> All Users</a>
            <a href="/userinfo"><i className="fa-solid fa-list-check"></i> User Details</a>
            <a href="/manage"><i className="fa-solid fa-gears"></i> Manage Users</a>
            </nav>
        </div>
    );
};

export default Header;