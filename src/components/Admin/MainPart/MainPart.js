import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { UserContext } from '../../../App';
import teacher from '../../../images/meet (2).jpg';

const MainPart = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL,setImageURL] = useState(null);

    const onSubmit = data => {
        console.log(data);
        const eventData = {
            name      : data.name,
            imageURL  : imageURL,
            price     : data.price,
            subject   : data.subject,
        };
        const url = `http://localhost:5050/addTeacher`;
        console.log(eventData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response',res))
    };


    const handleImageUpload = event => {
       const imageData = new FormData();
       imageData.set('key','b349a25b12d1cf8ea35b3bbbf5e43501');
       imageData.append('image',event.target.files[0]);

       axios.post('https://api.imgbb.com/1/upload',
       imageData)
      .then(function (response) {
          console.log(response);
          setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    return (
        <div>
            <div className="row m-5 p-5">
                <div className="col-md-5">
                    <img src={teacher} style={{height: '300px'}}/>
                </div>
                <div className="text-center col-md-7 bg-info">
                    <div>
                        <h2>Admin, {loggedInUser.displayName} !!! .</h2>
                        <h3>Mail : {loggedInUser.email}</h3>
                        <h5>Added Teacher</h5>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" defaultValue="Name"  {...register("name")}/> 
                        <br/>
                        <br/>
                        
                        <input name="price" defaultValue= "price"  {...register("price")}/> 
                        <br/>
                        <br/>

                        <input name="subject" defaultValue= "subject"  {...register("subject")}/> 
                        <br/>
                        <br/>

                        <input name="exampleRequired" type="file" onChange={handleImageUpload}/>
                        <br/>
                        <br/>
                        <button type="submit" className="btn btn-light">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPart;