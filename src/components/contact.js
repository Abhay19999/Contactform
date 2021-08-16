import React, { useState } from 'react';
import "./style.css";

const Contact = () => {
    const [user,setUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
    });
    let name, value;
    const getUserData = (event) =>{
        name = event.target.name;
        value =  event.target.value;

        setUser({...user, [name]: value});

    };
    const postData = async (e) => {
        e.preventDefault();

        const {name,email,phone,address,message} = user;
        if(name && email && phone && address && message){
            const res = fetch(
                "https://contactform-4e72f-default-rtdb.firebaseio.com/contactform.json",{
                    method : "POST",
                    headers : {
                        "Content-Type": "applecation/json",
                    },
                    body:JSON.stringify({
                        name,
                        email,
                        phone,
                        address,
                        message,
                    }),
                });
                if(res){
                    setUser({
                        name: "",
                        email: "",
                        phone: "",
                        address: "",
                        message: "",
                    });
                    alert("Will contact you shortly");
    
                }
        }else{
            alert("Please enter all required data");
        }
        
        
    };
    return (

    <div> 
        <div className="container">
            <h3>Contact Form</h3>
            <form action="#" name="contact_form" method = "POST">
            <div className="first-row">
                <label >Full Name</label>
                <input name="name" type="text" 
                required placeholder="Enter Name"
                value = {user.name}
                onChange={getUserData}/>
                <br/>
                <label>Phone number</label>
                <input name="phone" type="text" 
                required placeholder="Enter your Number" autoComplete = "off"
                value = {user.phone}
                onChange={getUserData}/>               
                <br/>
                <label>Address</label>
                <input name="address" type="text" 
                required placeholder="Enter your Number" autoComplete = "off"
                value = {user.address}
                onChange={getUserData}/>
                <label>Email</label>
                <input name="email" type="email" 
                required placeholder="Enter your Email" autoComplete="off"
                value = {user.email}
                onChange={getUserData}/>
                <br/>
                <label >Message</label><br/>
                <textarea name="message" cols="30" rows="10" 
                required placeholder="Enter your message here ..."
                value = {user.message}
                onChange={getUserData}></textarea>
                <div className="center">
                <button type="submit" 
                onClick={postData}>Submit </button>
            </div>
            </div>
            </form>	
        </div>
         
            
    
</div>
    )
}

export default Contact;
