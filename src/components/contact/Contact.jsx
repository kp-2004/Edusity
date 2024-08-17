import React from 'react'
import './contact.css'
import msg from '../../assets/msg.png'

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8cd6441e-d381-49f2-92ae-e70cb994a737");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



    return (
        <div className='contact' id='Contact'>
            <div className='contact-col'>
                <h3>Send message<img src={msg}/></h3>
                <p>Feel free to reach out through contact from or find our contact
                    information below. Your feedback, questions, and suggestion are important 
                    to us as we strive to provide exceptional service to our 
                    university community.
                </p>
                <ul>
                    <li><i class="fa fa-envelope"></i>Contact@gmail.com</li>
                    <li><i class='fa fa-phone'></i>+123 456 789</li>
                    <li><i class="fa fa-address-card"></i>77 Campbrige, <br></br> MA-110022, United State</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type='text' name='name' placeholder='Your Name' required/>
                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter your Mobile Number' required/>
                    <label>Write Your Message</label>
                    <textarea name="message" rows={6} placeholder='Enter your Message' required/>
                    <button type="submit" className='btn dark-btn'>Submit Now<i class='fa fa-arrow-right'></i></button>
                </form>
                <span> {result}</span>
            </div>

        </div>
    )
}

export default Contact
