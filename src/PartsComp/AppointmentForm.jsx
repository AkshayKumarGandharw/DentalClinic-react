import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

function AppointmentForm() {

    const form = useRef();
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [service, setService] = useState();
    const [subject, setSubject] = useState();


    const handleDateChange = (date) =>{
        setSelectedDateTime(new Date(date.target.value));
    };




    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mgfndnp', 'template_a23u4nt', form.current, 'm03Cs7QxrHfDObKiz')
            .then((result) => {
                alert("Email send successfully!")
                console.log(result.text);
                form.current.reset();
            },
                (error) => {
                    alert("Failed to send Email!,please try again..")
                    console.log(error.text);
                }
            );
    };


    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="row g-3">

                <div className="col-12 col-sm-6">
                    <input name="your_name" 
                    type="text" 
                    className="form-control bg-light border-0" 
                    placeholder="Your Name" 
                    required 
                    onChange={(event)=>setName(event.target.value)}
                     style={{ height: "55px" }} />
                    <p style={{color:"red",textAlign:"Left"}}>{name? " ": "name is required"}</p>
                </div>

                <div className="col-12 col-sm-6">
                    <input name="from_email" 
                    type="email" 
                    className="form-control bg-light border-0" 
                    placeholder="Your Email"
                     required
                     onChange={(event)=>setEmail(event.target.value)} 
                     style={{ height: "55px" }} />
                    <p style={{color:"red",textAlign:"Left"}}>{email? " ": "email is required"}</p>
                </div>

                <div className="col-12 col-sm-6">
                    <input name="phone"
                     type="text" 
                     className="form-control bg-light border-0" 
                     placeholder="Your phone"
                      required 
                      onChange={(event)=>setPhone(event.target.value)}
                      style={{ height: "55px" }} />
                    <p style={{color:"red",textAlign:"Left"}}>{phone? " ": "phone is required"}</p>
                </div>

                  <div className="col-12 col-sm-6">
                    <input name="date"
                     type="datetime-local" 
                     value={selectedDateTime.toISOString().slice(0,16)} 
                      onChange ={handleDateChange} 
                      className="form-control bg-light border-0"
                       placeholder="date and time" 
                        required 
                        style={{ height: "55px" }} />
                        
                  </div>
                  

                <div className="col-12 col-sm-6">
                    <select name="service" 
                    className="form-select bg-light border-0" 
                    required 
                    onChange={(event)=>setService(event.target.value)}
                    style={{ height: "55px" }}>
                        <option selected>Select A Service</option>
                        <option value="1">Service 1</option>
                        <option value="2">Service 2</option>
                        <option value="3">Service 3</option>
                    </select>
                    <p style={{color:"red",textAlign:"Left"}}>{service? " ": "service is required"}</p>
                </div>

                <div className="col-12 col-sm-6">
                    <input name="subject"
                     type="text" 
                     className="form-control bg-light border-0" 
                     placeholder="Your subject"
                     onChange={(event)=>setName(event.target.value)}
                    required style={{ height: "55px" }} />
                    <p style={{color:"red",textAlign:"Left"}}>{subject? " ": "subject is required"}</p>
                </div>

                <div className="col-12">
                    <textarea name="message" 
                    class="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3"
                    placeholder='Short description'
                    >

                    </textarea>
                </div>

                <div className="col-12">
                    <button className="btn btn-dark w-100 py-3" type="submit">Make Appointment</button>
                </div>
            </div>
        </form>
    )
}

export default AppointmentForm