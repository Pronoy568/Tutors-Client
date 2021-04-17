import React from 'react';

const Footer = () => {
    return (
    <footer>
        <section className="row m-5">
            <div className="col-md-3">
               <h3>information for</h3>
               <br/>
               <p>Prospective Undergraduates</p>
               <p>Prospective graduate students</p>
               <p>Business/Partnerships</p>
               <p>Visitors</p>
               <p>Parliamentarians</p>
            </div>
            <div className="col-md-3">
                <h3>Quick Links</h3>
                <br/>
                <p>Contact Searches</p>
                <p>Jobs and Vacancies</p>
                <p>University images</p>
                <p>Private Policy</p>
                <p>Terms and Conditions</p>
            </div>
            <div className="col-md-3">
                <h3>information About</h3>
                <br/>
                <p>Strategic Planning</p>
                <p>Museums and collections</p>
                <p>Fees and Fundings</p>
                <p>Statement on Modern Slavery</p>
                <p>Data privacy</p>
            </div>
            <div className="col-md-3">
                <h3>Security Brand</h3> 
                <br/>
                <p>Privacy Statement</p>
                <p>Report</p>
                <p>Security</p>
                <p>Notice</p>
                <p>Access Control</p>
            </div>
        </section>
        <div className="copyRight text-center text-warning bg-light">
             <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
        </div>
    </footer>
    );
};

export default Footer;