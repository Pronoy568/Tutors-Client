import React, { useEffect, useState } from 'react';
import Tutor from '../Tutor/Tutor';

const Tutors = () => {

    const [teachers , setTeachers] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5050/teachers')
        .then(res => res.json())
        .then(data =>setTeachers(data))
    },[])

    return (
        <section>
            <div className="container m-5 p-5">
                <h1 className="text-center mb-3" style={{color: '#1CC7C1'}}>Our Teachers</h1>
                <div className="row m-5 p-5">
                  {
                      teachers.map(teacher => <Tutor teacher={teacher}></Tutor>)
                  }
                </div>
            </div>
        </section>
    );
};

export default Tutors;