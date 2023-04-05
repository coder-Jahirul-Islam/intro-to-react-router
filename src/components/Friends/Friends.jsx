import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';


const Friends = () => {
    const friends = useLoaderData();
    // console.log(friends);
    return (
        <div className='friends'>
            <h2>These are my friends: {friends.length}</h2>
            <div>
                {
                    friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                    ></Friend>)
                }
            </div>
            
        </div>
    );
};

export default Friends;