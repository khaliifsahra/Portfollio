import React from 'react'
import './Contact.css'
import Arrow_icon from '../../assets/Imgs/Arrow_icon.svg'
import phone from '../../assets/Imgs/phone.svg'
import email from '../../assets/Imgs/email.svg'
import locotion from '../../assets/Imgs/locotion.svg'
import pp from '..//../assets/Imgs/pp.png'
const Contact = () => {

    const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  // Isticmaal access key-gaaga saxda ah
  formData.append("access_key", "9cfd12ff-bd02-4440-b09c-d3e8ca1b05a6");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully! ✅");
      event.target.reset(); // Form-ka nadiifi
    } else {
      alert("Failed to send message. 😢 Try again later.");
      console.log(res);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("An error occurred. Please try again.");
  }
};


  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={pp} alt="Arrow Icon" />
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-datail">
                        <img src={email} alt="" /><p> khaliifsahra84@gmail.com</p>

                    </div>
                    <div className="contact-datail">
                        <img src={phone} alt="" /><p> +252619964447</p>
                    </div>
                    <div className="contact-datail">
                        <img src={locotion} alt="" /> <p> Somalia, Mogdisho</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor=""> write Your message</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
