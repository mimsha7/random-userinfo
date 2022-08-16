import React from 'react';
import './Users.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

const Users = (props) => {
    const {name, image, address, email, salary } = props.user;
    const handleAddUser = props.handleAdUser;
    return (
        <div className="user-info">   
            <h4>Name: {name}</h4>
            <img src={image} alt="" />
            <p><small>Email: {email}</small></p>
            <p><small> Address: {address.street} <br/>City: {address.city}<br/>Zip: {address.zipcode}</small></p>
            <p>Salary: ${salary}</p>
            <button onClick={() => handleAddUser(props.user)}><FontAwesomeIcon icon={faPlus} /> Add User</button>
         </div>
          

    );
};

export default Users;