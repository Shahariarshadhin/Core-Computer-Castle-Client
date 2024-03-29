import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';


const User = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://core-computer-castle.onrender.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    })
        .then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (

        <div class="overflow-x-auto">
            <h2>{users.length}</h2>
            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user, index) => <UserRow

                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}

                        ></UserRow>

                        )
                    }


                </tbody>
            </table>
        </div>







    );
};

export default User; 