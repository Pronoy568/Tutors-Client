import React from 'react';
import { Link } from 'react-router-dom';

const AdminLink = () => {
    return (
        <div className='bg-light m-5 p-5 text-center' style={{border:'1px solid #8adf7b'}}>
            <div>
                 <Link className="nav-link me-5" to="/admin/addTeacher">Add Teacher</Link>
            </div>
            <div>
                 <Link className="nav-link me-5" to="/admin/addService">Add Service</Link>
            </div>
        </div>
    );
};

export default AdminLink;