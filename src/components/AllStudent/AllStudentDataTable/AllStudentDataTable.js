import React from 'react';

const AllStudentDataTable = ({students}) => {
    return (
<table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Address</th>
                <th className="text-secondary" scope="col">Class</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Type</th>
                <th className="text-secondary" scope="col">Institutions</th>
                </tr>
            </thead>
            <tbody>
                {
                  students.map((student, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{student.name}</td>
                        <td>{student.address}</td>
                        <td>{student.class}</td>
                        <td>{student.phone}</td>
                        <td>{student.email}</td>
                        <td>{student.subject}</td>
                        <td>{student.Institutions}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AllStudentDataTable;