import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';


export default function Contact() {
function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_dv5huao', e.target, 'user_TdXgLE6TQFIibIOHKNjD4')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    
    return(
        <>
            <div className='contact-container'>
                <h1 className='line typewriter'>Contact Me</h1>
                <div className='contact'>
                    <form onSubmit={sendEmail}>
                        <div className='col-2'>
                            <div className='form-group'>
                                <label>Name</label>
                                <input type='text'name="name"/>
                            </div>
                        </div>

                        <div className='col-2'>
                            <div className='form-group'>
                                <label>E-mail</label>
                                <input type='email' name="email" required/>
                            </div>
                        </div>  

                        <div className='col-2'>
                            <div className='form-group'>
                                <label>Subject</label>
                                <input type='text' name="subject"/>
                            </div>
                        </div>

                        <div className='col-2'>
                            <div className='form-group'>
                                <label>Message</label>
                                <textarea placeholder="Looking forward to hear from you." cols="46" rows="5" name="message" required></textarea>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='form-group'>
                                <input type="submit" className="btn" value="Send"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
}

