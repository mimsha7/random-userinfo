import React from 'react';
import './Suser.css'

const Suser = (props) => {
    const suser = props.suser;
    let totalSalary = suser.reduce((total, user) => total+ Number(user.salary), 0);
    return (
        <div className="total-info">
            <h2>Total Added: {suser.length}</h2>
            <h3>Total Salary: ${totalSalary}</h3>
            {
                suser.map((user) => {
                return(
                       <h3>Name: {user.name} <img style={{alignItem: 'center'}} src={user.image} alt="" width="10%" /></h3> 
                    )
                })
            }
            
        </div>
    );
};

export default Suser;