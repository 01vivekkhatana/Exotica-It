
import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
function Form() {

    const form = useRef();
    const [errorMessage, setErrorMessage] = useState('');

    let notyf;
    useEffect(() => {
        notyf = new Notyf();
    }, []);
    const sendEmail = (e) => {
        e.preventDefault();

        // Check if form fields are empty
        const formData = new FormData(form.current);
        let isEmpty = false;
        for (const value of formData.values()) {
            if (!value.trim()) {
                isEmpty = true;
                break;
            }
        }

        if (isEmpty) {
            setErrorMessage('Please fill out all fields');
            return;
        }

        // Clear previous error message
        setErrorMessage('');

        emailjs
            .sendForm('service_du9tvb4', 'template_s3gwxlc', form.current, {
                publicKey: 'Lw6NS_K4kicjc0vOG',
            })
            .then(
                () => {
                    //   console.log('SUCCESS!');
                    notyf.success(' successfully send message ');
                    form.current.reset();
                   
                },
                (error) => {
                    notyf.error('FAILED...', error.text);
                },
            );
    };
  
    return (
        <>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <form ref={form} onSubmit={sendEmail}>
                <div class="row g-3">
                    <div class="col-md-6">
                        <input type="text" class="form-control border-0 bg-light px-4" name="from_name" placeholder="Your Name" style={{ height: '55px' }} />
                    </div>
                    <div class="col-md-6">
                        <input type="email" class="form-control border-0 bg-light px-4" name="from_email" placeholder="Your Email" style={{ height: '55px' }} />
                    </div>
                    <div class="col-12">
                        <input type="text" class="form-control border-0 bg-light px-4" name="from_subject" placeholder="Subject" style={{ height: '55px' }} />
                    </div>
                    <div class="col-12">
                        <textarea class="form-control border-0 bg-light px-4 py-3" rows="4" name="message" placeholder="Message"></textarea>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary w-100 py-3 btn-massage" type="submit" value="Send">Send Message</button>
                    </div>
                </div>
            </form>

        </>
    );
}

export default Form;