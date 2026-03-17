import styles from './about.module.scss';
import classNames from 'classnames';
import { Navbar } from '../navbar/navbar';

export interface AboutProps {
    className?: string;
}
export const About = ({ className }: AboutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Navbar />
            <ul className={styles['circles']}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className={styles.body}>
                <div className={styles.top}>
                    <h1 className={styles.AboutHead}>About me</h1>
                    <span className={styles.aboutP}>
                        Hey there! I'm Paolo Miguel C. Morato, based in Marikina City.
                        <br />
                        <br />
                        I currently work as a DocOps Engineer at ITRS Phils Inc., where I build and
                        improve documentation systems, web features, and AI-powered workflows. I
                        focus on automation, CI/CD, SEO, and documentation performance to deliver
                        scalable and reliable experiences.
                        <br />
                        <br />
                        I graduated with a Bachelor of Science in Computer Science from the
                        Polytechnic University of the Philippines. My core stack includes
                        JavaScript, TypeScript, Python, React, Node.js, Express, PostgreSQL, MySQL,
                        MongoDB, Docker, Jenkins, and cloud services on GCP and AWS.
                        <br />
                        <br />
                        I enjoy building efficient tools and user-focused products, and I am always
                        open to collaboration.
                    </span>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.intro}>
                        <div className={styles.container}>
                            <h1>
                                My Timeline <span className={styles.arrow}>&#8595;</span>
                            </h1>
                        </div>
                    </div>
                    <div className={styles.timeline}>
                        <ul>
                            <li>
                                <div>
                                    <time>Sep 2024 - Present</time>
                                    Joined ITRS Phils Inc. as a DocOps Engineer, leading AI-driven
                                    translation workflows, maintaining documentation systems and websites, improving search indexing accuracy, and enhancing CI/CD pipelines and documentation website performance..
                                </div>
                            </li>
                            <li>
                                <div>
                                    <time>2024</time>
                                    Defended our thesis project RiverCast and secured 2nd place in a
                                    research competition.
                                </div>
                            </li>
                            <li>
                                <div>
                                    <time>Aug 2023 - Nov 2023</time>
                                    Worked as a Full Stack Web Development Intern at iBuild.PH,
                                    developing and maintaining an eCommerce website for a music
                                    ministry.
                                </div>
                            </li>
                            <li>
                                <div>
                                    <time>2020 - 2024</time>
                                    Finished Bachelor of Science in Computer Science at the
                                    Polytechnic University of the Philippines and graduated Cum
                                    Laude.
                                </div>
                            </li>
                            <li>
                                <div>
                                    <time>2018 - 2020</time>
                                    Completed Senior High School (STEM) at AMA East Rizal.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div />
                </div>
            </div>
        </div>
    );
};
