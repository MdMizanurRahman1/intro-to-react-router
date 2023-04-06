import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h2>Here is friend details</h2>
            <h3>{friend.name}</h3>
            <p>email: {friend.email}</p>
        </div>
    );
};

export default FriendDetail;