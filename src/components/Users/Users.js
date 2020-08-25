import React, { useEffect, useState } from 'react';
import url from '../../topRatingUserData/index';
import Card from '../Card/Card';
import './Users..css';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [added, setAdded] = useState(0);
    const [contribution, setContribution] = useState(0);
    

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            let rawUsers = data.result;

            rawUsers.sort((user1, user2) => {
                return user2.rating - user1.rating;
            });
            setUsers(rawUsers.slice(0,15));
        });
    }, [])

    const handleAdd = function (user) {
        setAdded(added + 1);
        setContribution(contribution + user.contribution);
    }

    return (
        <div className="body-container">
            <div className="user">
                {
                    users.map(user => <Card user={user} handleAdd={handleAdd} key={user.handle}></Card>)
                }
            </div>
            <div className="cart">
                <h2>Friend's Summary</h2>
                <p>Number of added friends: {added}</p>
                <p>Total contribution: {contribution}</p>
            </div>
        </div>
    );
};

export default Users;