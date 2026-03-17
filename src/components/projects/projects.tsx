import styles from './projects.module.scss';
import classNames from 'classnames';
import { Navbar } from '../navbar/navbar';
import { Link } from 'react-router-dom';

export interface ProjectsProps {
    className?: string;
}
export const Projects = ({ className }: ProjectsProps) => {
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
                <div className={styles.projHeader}>
                    <h1 className={styles.projHeaderIntro}>My Projects</h1>
                    <p className={styles.introParaProj}>
                        Here are selected projects from my professional and academic work.
                    </p>
                </div>
                <div className={styles.projectContainer}>
                    <div className={styles['box-container']}>
                        <span className={styles['project-title']}>
                            Barangay Management and Request System (BMRS)
                        </span>
                        <span className={styles['project-desc']}>
                            Built a PERN stack web application enabling residents to request
                            barangay certificates and IDs online, improving accessibility and
                            processing efficiency. Stack: PostgreSQL, Express.js, React, Node.js.
                        </span>
                        <div className={styles['project-btn']}>
                            <Link to={'https://github.com/pmcm4/brgy'} target="__blank">
                                <button>GitHub</button>
                            </Link>
                        </div>
                    </div>

                    <div className={styles['box-container']}>
                        <span className={styles['project-title']}>
                            E-Commerce Website for Leather Shoes
                        </span>
                        <span className={styles['project-desc']}>
                            Developed a MERN stack web application with Stripe and PayPal payment
                            systems. Stack: MongoDB, Express.js, React, Node.js.
                        </span>
                        <div className={styles['project-btn']}>
                            <Link
                                to={'https://github.com/pmcm4/unileather-client-side'}
                                target="__blank"
                            >
                                <button>GitHub</button>
                            </Link>
                            <Link to={'https://unileather.netlify.app/'} target="__blank">
                                <button>Demo</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles['box-container']}>
                        <span className={styles['project-title']}>
                            RiverCast: Forecasting Marikina River Level
                        </span>
                        <span className={styles['project-desc']}>
                            Developed a system predicting the water level of the Marikina River
                            using a deep learning model and secured 2nd place in a research
                            competition. Stack: Python, React.js, Flask.
                        </span>
                        <div className={styles['project-btn']}>
                            <Link
                                to={'https://github.com/pmcm4/rivercast-tool-UI'}
                                target="__blank"
                            >
                                <button>GitHub</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles['box-container']}>
                        <span className={styles['project-title']}>LinkAlert</span>
                        <span className={styles['project-desc']}>
                            An Android SMS application that detects malicious links in SMS messages
                            using a Naive Bayes machine learning model. Stack: Java, Python,
                            Android Studio, FastAPI.
                        </span>
                        <div className={styles['project-btn']}>
                            <Link
                                to={'https://github.com/pmcm4/malicious-SMS-detector-FSM'}
                                target="__blank"
                            >
                                <button>GitHub</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
