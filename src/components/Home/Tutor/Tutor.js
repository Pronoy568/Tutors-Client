import React from 'react';

const Tutor = ({teacher}) => {
    return (
        <div className="col-md-3 m-1 p-1 bg-light" style={{border:'1px solid white',borderRadius:"15px"}}>
            <div className="row">
                <div className="col-md-7">
                   <img className="img-fluid mb-3" style={{height:"100px",width:"330px",borderRadius:"15px"}} src={teacher.imageURL} alt=""/>
                   <h4 style={{color:'green'}}>{teacher.name}</h4>
                   <h5 className="text-primary">{teacher.subject}</h5>
                </div>
                <div className="col-md-4 text-center"  style={{color:'orange'}}>
                   <h5>${teacher.price}</h5>
                   <h5>Hours</h5>
                </div>
            </div>
        </div>
    );
};

export default Tutor;