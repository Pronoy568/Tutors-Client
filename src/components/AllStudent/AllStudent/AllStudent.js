import React, { useEffect, useState } from 'react';
import Meet from '../../Common/Meet/Meet';
import Footer from '../../Home/Footer/Footer';
import AllStudentDataTable from '../AllStudentDataTable/AllStudentDataTable';
import AllStudentNavbar from '../AllStudentNavbar/AllStudentNavbar';

const AllStudent = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5050/Students')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])

    return (
        <div className="container-fluid">
            <AllStudentNavbar></AllStudentNavbar>
            <div className="text-center m-5 p-5 bg-light">
               <h1 className="text-info">All Student</h1>
                <AllStudentDataTable students={students}></AllStudentDataTable>
            </div>
            <Meet></Meet>
            <Footer></Footer>
        </div>
    );
};

export default AllStudent;