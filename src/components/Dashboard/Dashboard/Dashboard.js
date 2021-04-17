import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Meet from '../../Common/Meet/Meet';
import Footer from '../../Home/Footer/Footer';
import DashboardNavBar from '../DashboardNavbar/DashboardNavbar';
import SelectedByDate from '../SelectedByDate/SelectedByDate';

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [students , setStudents] = useState([]);
    const handleDateChange = date =>{
        setSelectedDate(date);
    }
    
    useEffect(()=>{
        fetch('http://localhost:5050/selectedByDate',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body : JSON.stringify({date: selectedDate.toDateString()})
        })
        .then(res => res.json())
        .then(data => setStudents(data))
    },[selectedDate])

    const containerStyle = {
        backgroundColor: '#1e97a3',
        height: '100%'
    }
    return (
        <section>
            <DashboardNavBar></DashboardNavBar>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-6">
                    <SelectedByDate students={students}></SelectedByDate>
                </div>
            </div>
            <Meet></Meet>
            <Footer></Footer>
        </section>
    );
};

export default Dashboard;