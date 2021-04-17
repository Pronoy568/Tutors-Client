import React from 'react';
import StudentsShortList from '../StudentsShortList/StudentsShortList';

const SelectedByDate = ({students}) => {
    console.log(students);
    return (
        <div>
            <h1 className="text-center">Students List</h1>
            {
                students.length ?
                 <StudentsShortList students={students} ></StudentsShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No students for this Date</h4>
                </div>
            }
        </div>
    );
};

export default SelectedByDate;