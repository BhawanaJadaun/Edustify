import React from 'react'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import './Contact.css'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a6adbe23-61c1-4e76-b313-9c3a8b39aa74");

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
    <div className='Contact'>
<div className='Contact-col'>
<h3>Send Us Message <img src = {msg_icon} /></h3>
<p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions and suggestions are important to us as we strive tp provide exceptional service to our university community</p>
<ul>
<li><img src = {mail_icon}/>bhawanajadaun0001@gmail.com</li>
<li><img src = {phone_icon}/>+912-345-78952</li>
<li><img src = {location_icon}/>Aligarh,Gopi(204215)</li>
</ul>
</div>
<div className='Contact-col'>

      <form onSubmit={onSubmit}>
      <label>Your name</label>
      <input type='text' name='name' placeholder='Enter Your Name' required/>
      <label>Phone Number</label>
      <input type='tel' name='phone' placeholder='Enter Your  Mobile Number 'required/>
      <label>Write Your Message here</label>
      <textarea name='' id='' color='30' rows= '10'></textarea>
        <button type="submit" className='btn dark-btn'>Submit Now <img src= {white_arrow}/></button>

      </form>
      <span>{result}</span>

   
</div>
    </div>
  )
}

export default Contact