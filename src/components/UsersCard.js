import React, { useState } from 'react'
import Navbar from './Navbar';
import User from './User';

export default function UsersCard() {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {

        let url = "https://reqres.in/api/users?page=1";
        let users = await fetch(url);
        let parsedUsers = await users.json();

        setUsers(parsedUsers.data);
    }

    return (
        <>
            <Navbar handleRequest={getUsers} />
            <div className='container'>
                <div className='row'>
                    {users.map((user) => {
                        return <div className='col-md-4' key={user.id}>
                            <User Fname={user.first_name} Lname={user.last_name} email={user.email} avatar={user.avatar} />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}
