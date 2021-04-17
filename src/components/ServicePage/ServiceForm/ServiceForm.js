import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

const ServiceForm = ({modalIsOpen,closeModal,SelectedOn,date}) => {
    const { register, handleSubmit,errors } = useForm();
    const onSubmit = data => {
        data.subject =SelectedOn;
        data.date = date.toDateString();
        date.created = new Date();
  
        fetch('http://localhost:5050/addStudent',{
          method : 'POST',
          headers : { 'Content-Type': 'application/json'},
          body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
           if(success){
               closeModal();
               alert('You added successfully');
           }
        })
      }
    return (
        <div>
        <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
          >

              <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-center" style={{color:'#1CC7C1'}}>{SelectedOn}</h2>
              <p className="text-secondary text-center"><small>{date.toDateString()}</small></p>
                  <div className="form-group p-1">
                      <input type="text"  name="name" placeholder="Your Name" className="form-control" {...register("name")}/>
                      {errors?.name && <span className="text-danger">This field is required</span>}
  
                  </div>
                  <div className="form-group p-1">
                      <input type="text"  name="email" placeholder="Email" className="form-control" {...register("email")}/>
                      {errors?.email && <span className="text-danger">This field is required</span>}
                  </div>
                  <div className="form-group p-1">
                      <input type="text"  name="phone" placeholder="Phone Number" className="form-control" {...register("phone")}/>
                      {errors?.phone && <span className="text-danger">This field is required</span>}
                  </div>
                  <div className="form-group row p-1">
                      <div className="col-4">
                          <input className="form-control" name="address" placeholder="Your address" type="text" {...register("address")}/>
                          {errors?.address && <span className="text-danger">This field is required</span>}
                      </div>
                      <div className="col-4">
                          <input  className="form-control" name="class" placeholder="class" type="number" {...register("class")}/>
                          {errors?.weight && <span className="text-danger">This field is required</span>}
                      </div>
                      <div className="col-4">
                          <input className="form-control" name="Institutions" placeholder="Your Institutions" type="text" {...register("Institutions")}/>
                          {errors?.Institutions && <span className="text-danger">This field is required</span>}
                      </div>
                  </div>
  
                  <div className="form-group p-1 text-center">
                    <button type="submit" className="btn btn-primary">Send</button>
                  </div>
              </form>
          </Modal>
          </div>
    );
};

export default ServiceForm;