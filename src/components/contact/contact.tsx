import styles from './contact.module.scss';
import classNames from 'classnames';
import { Navbar } from '../navbar/navbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface ContactProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contact = ({ className }: ContactProps) => {

    const form = useRef<HTMLFormElement>(null);

    
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (form.current) {
          emailjs
            .sendForm('service_abnh56n', 'template_55f8o2v', form.current, '5_XL6n53Jvn1oHMaP')
            .then(
              (result) => {
                console.log(result.text);
                if (form.current) {
                  form.current.reset();
                }
                toast.success('Email sent successfully!'); // Display success message
              },
              (error) => {
                console.log(error.text);
                toast.error('Failed to send email.'); // Display error message
              }
            );
        }
      };
      

    return (
        <div className={classNames(styles.root, className)}>
            <Navbar />
            <div className={styles.body}>
                <div className={styles.left}>
                    <h1 className={styles.headerCont}>
                        CONTACT <br /> ME
                        <p className={styles.ptag}>
                        <br /> Marikina City
                            <br /> pmorato187@gmail.com
                            <br /> <br /> 
                        </p>
                    </h1>
                    <h1 className={styles.connect}>FIND ME ON</h1>
                    <div className={styles.icons}>

                        <Link to={"https://github.com/pmcm4"} target="_blank">
                        <GitHubIcon className={styles.githubic}  sx={{fontSize: "50px"}}/>
                        </Link>
                        <Link to={"https://www.facebook.com/paolomorato04"} target="_blank">
                        <FacebookIcon className={styles.fbic} sx={{fontSize: "50px"}}/>
                        </Link>
                        
                        <Link to={"https://www.instagram.com/pao.lamb/"} target="_blank">
                        <InstagramIcon className={styles.igic} sx={{fontSize: "50px"}}/>
                        </Link>

                        <Link to={"https://www.linkedin.com/in/paolo-morato-2a80b9146/"} target="_blank">
                        <LinkedInIcon className={styles.linic} sx={{fontSize: "50px"}}/>
                        </Link>

                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className={styles.right}>
                    <input  className={styles.name} type="text" name="from_name" placeholder='Name' required/>
                    <input className={styles.email} type="email" name="from_email" placeholder='email' required/>
                    <textarea className={styles.message} name="message" placeholder='Write your message here...' required/>
                    <input className={styles.sendBtn} type="submit" value="Send" />
                    </form>
                    <ToastContainer toastStyle={{ backgroundColor: "black", color:"white", border:"2px white solid" }}
                    />
            </div>
        </div>
    );
};
