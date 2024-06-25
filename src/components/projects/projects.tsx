import styles from './projects.module.scss';
import classNames from 'classnames';
import { Navbar } from '../navbar/navbar';
import { Link } from 'react-router-dom';

export interface ProjectsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
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
                        Here are some of the projects I've worked on, both within my university and
                        with external clients.
                    </p>
                </div>
                <div className={styles.projectContainer}>
                    <div className={styles['box-container']}>
                        <span className={styles['project-title']}>
                            Barangay Request Management System
                        </span>
                        <span className={styles['project-desc']}>
                            Developed a PERN stack web application for residents to request barangay
                            certificates and IDs.{' '}
                            <strong>Client: Barangay San Roque Marikina City</strong>
                        </span>
                        <div className={styles['project-btn']}>
                            <Link to={'https://github.com/pmcm4/brgy'} target="__blank">
                                <button>GitHub</button>
                            </Link>
                            <Link to={'https://www.pmcm-dev.xyz/home'} target="__blank">
                                <button>Demo</button>
                            </Link>
                        </div>
                    </div>

                    <div className={styles['box-container']}>
                        <span className={styles['project-title']}>UniLeather</span>
                        <span className={styles['project-desc']}>
                            Developed a MERN Stack web application with Stripe and PayPal payment
                            systems.
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
                        <span className={styles['project-title']}>Thesis: RiverCast</span>
                        <span className={styles['project-desc']}>
                            Developed a system predicting the water level of the Marikina River
                            using a deep learning model. Secured 2nd place in a research
                            competition.
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
                        <span className={styles['project-title']}>M-SMS</span>
                        <span className={styles['project-desc']}>
                            An SMS app uses SMSRetriever API to read messages, extract URLs, and
                            classify them using a Kaggle dataset with Jaro-Winkler (90% threshold)
                            and a Finite State Machine for multiple URLs.
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
                    <div className={styles['box-container']}>
                        <span className={styles['project-title']}>
                            Web Based Sentiment Analysis
                        </span>
                        <span className={styles['project-desc']}>
                            A Python-based Naive Bayes sentiment analysis model for Tagalog product
                            reviews, integrated with a React.js interface.
                        </span>
                        <div className={styles['project-btn']}>
                            <Link
                                to={'https://github.com/pmcm4/sentiment_analysis'}
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
