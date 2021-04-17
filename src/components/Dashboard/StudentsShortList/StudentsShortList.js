import React from 'react';

const StudentsShortList = ({students}) => {
    console.log(students);
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-warning" scope="col">Name</th>
                <th className="text-warning" scope="col">Phone</th>
                <th className="text-warning" scope="col">Email</th>
                <th className="text-warning" scope="col">Class</th>
                </tr>
            </thead>
            <tbody>
                {
                  students.map((student, index) => 
                        
                    <tr>
                        <td>{student.name}</td>
                        <td>{student.phone}</td>
                        <td>{student.email}</td>
                        <td>{student.class}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default StudentsShortList;