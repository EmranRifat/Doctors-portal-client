import React from 'react';
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile 	">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-3xl  text-center font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet>
                </Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 bg-sky-100	overflow-y-auto w-80  text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to={'/dashboard'}>My Appointments</Link></li>
                    <li><Link to={'/dashboard/review'}>My Reviews</Link></li>
                    <li><Link to={'/dashboard/users'}>All Users</Link></li>
                    <li><Link to={'/dashboard/AddDoctor'}>Add Doctor</Link></li>
                    <li><Link to={'/dashboard/ManageDoctor'}>Manage Doctor</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;