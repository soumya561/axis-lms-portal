import classes from "./ContactPage.module.css"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';



// npm i @emailjs/browser
const ContactPage = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_loiku9j",
        "template_3i7vwx5",
        form.current,
        "gyriAj_SKLawKEgKa"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <body>
      
      <div className={classes.contactUs}>
      
        <div className={classes.title}><h2>CONTACT US</h2></div>
       
     
        <div className={classes.box} >
          <div className={classes.contactform}>
            <StyledContactForm>
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
              </form>
            </StyledContactForm>
        
        </div>
          <div className={classes.contactinfo}>
            <h3>Contact Info</h3>
            <div className={classes.infoBox}>
              <div>
                <span><LocationOnOutlinedIcon/></span>
                <p>CP,New Delhi <br/>INDIA</p>
              </div>
              <div>
                <span><EmailOutlinedIcon/></span>
                <a href="mailto:axisbatch9@gmail.com">axisbatch9@gmail.com</a>
              </div>
              <div>
                <span><LocalPhoneOutlinedIcon /></span>
                <a href="tel:+919999955555">+91 999 995 5555</a>
              </div>
            </div>
            

          <div className={classes.contactmap}  >
         

    
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.1123135637!2d77
          .20653217117979!3d28.62892055309332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057
          %3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v
          1674186949667!5m2!1sen!2sin"width="500" height="315" style= {{border:0}} allowfullscreen="" loading="lazy"
           referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
           </div>
        </div>
      </div>
    </body>
  );

};


export default ContactPage;



const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 25px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 1rem;
      cursor: pointer;
      background: rgb(164,34,77);
      text-align:centre;
      padding:3px;
      color: white;
      border: none;
    }
  }
`;