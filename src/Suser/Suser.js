import React from 'react';
import './Suser.css'

const Suser = (props) => {
    const suser = props.suser;
    let totalSalary = suser.reduce((total, user) => total+user.salary, 0);
    // console.log(totalSalary);
    return (
        <div className="total-info">
            <h2>Total Count: {suser.length}</h2>
            <h3>Total Salary: ${totalSalary}</h3>
        </div>
    );
};

export default Suser;