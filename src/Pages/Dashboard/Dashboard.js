import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import auth from '../../firebase.init';


const Dashboard = () => {

    const [user] = useAuthState(auth)

    const [admin] = useAdmin(user);

    return (
        <div class="drawer drawer-mobile">
            <input id="dashboards-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-3xl text-purple-500 font-bold text-center'>Welcome TO Your DashBoard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="dashboards-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">

                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/review">Add Your Review</Link></li>
                    {admin && <li><Link to="/dashboard/users">All Users</Link></li>}
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>





                    {/* <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
                    <li><Link to="/dashboard/manageDoctor">Manage Doctor</Link></li> */}




                </ul>

            </div>
        </div>
    );
};

export default Dashboard;