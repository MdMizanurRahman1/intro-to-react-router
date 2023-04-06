import React from 'react';
import './Friend.css'

const Friend = ({ friend }) => {
    console.log(friend);
    const { id, email, name, phone } = friend;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>Email:{email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default Friend;