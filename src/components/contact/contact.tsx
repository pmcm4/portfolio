import styles from './contact.module.scss';
import classNames from 'classnames';
import { Navbar } from '../navbar/navbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

export interface ContactProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contact = ({ className }: ContactProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Navbar />
            <div className={styles.body}>
                <div className={styles.left}>
                    <h1 className={styles.headerCont}>
                        CONTACT <br /> ME
                        <p className={styles.ptag}>
                            174 Shoe Ave. San Roque Marikina City
                            <br /> pmorato187@gmail.com
                            <br /> +63 976 372 5142
                        </p>
                    </h1>
                    <h1 className={styles.connect}>FIND ME ON</h1>
                    <div className={styles.icons}>

                        <Link to={"https://github.com/pmcm4"}>
                        <GitHubIcon className={styles.githubic}  sx={{fontSize: "50px"}}/>
                        </Link>
                        <Link to={"https://github.com/pmcm4"}>
                        <FacebookIcon className={styles.fbic} sx={{fontSize: "50px"}}/>
                        </Link>
                        
                        <Link to={"https://www.instagram.com/pao.lamb/"}>
                        <InstagramIcon className={styles.igic} sx={{fontSize: "50px"}}/>
                        </Link>

                        <Link to={"https://www.linkedin.com/in/paolo-morato-2a80b9146/"}>
                        <LinkedInIcon className={styles.linic} sx={{fontSize: "50px"}}/>
                        </Link>

                    </div>
                </div>
                <div className={styles.right}>
                    <input className={styles.name} placeholder="Name"></input>
                    <input className={styles.email} placeholder="Email" />
                    <textarea className={styles.message} placeholder="Write your message here." />
                    <button className={styles.sendBtn}>Send</button>
                </div>
            </div>
        </div>
    );
};
