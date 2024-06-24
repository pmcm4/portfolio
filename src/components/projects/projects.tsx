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
            <div className={styles.body}>
                <div className={styles.projHeader}>
                    <h1 className={styles.projHeaderIntro}>My Projects</h1>
                    <p className={styles.introParaProj}>
                        Here are some of the projects I&apos;ve worked on our university.{' '}
                    </p>
                </div>
                <div className={styles.projectContainer}>
                    <figure>
                        <h1>BMRS</h1>
                        <figcaption>
                            <h3>Barangay Management and Request System (BMRS)</h3>
                            <p className={styles.figdesc}>
                                Developed a PERN stack web application for residents to request
                                barangay certificates and IDs.
                            </p>
                            <div className={styles.buttons}>
                                <Link to={'https://github.com/pmcm4/admin'} target="_blank">
                                    <button className={styles.github}>GitHub</button>
                                </Link>

                                <Link to={'https://pmcm-dev.xyz/'} target="_blank">
                                    <button className={styles.demo}>Demo</button>
                                </Link>
                            </div>
                        </figcaption>
                    </figure>
                    <figure>
                        <h1>UNILEATHER</h1>
                        <figcaption>
                            <h3>UNILEATHER</h3>
                            <p className={styles.figdesc}>
                                E-Commerce website about leather shoes made locally and
                                internationally developed using MERN framework with Stripe and
                                Paypal payment system.
                            </p>
                            <div className={styles.buttons}>
                                <Link to={'https://github.com/pmcm4/admin'} target="_blank">
                                    <button className={styles.github}>GitHub</button>
                                </Link>

                                <Link to={'https://unileather.netlify.app/'} target="_blank">
                                    <button className={styles.demo}>Demo</button>
                                </Link>
                            </div>
                        </figcaption>
                    </figure>
                    <figure>
                        <h1>LINKALERT</h1>
                        <figcaption>
                            <h3>LINKALERT</h3>
                            <p className={styles.figdesc}>
                                An Android SMS application that detects malicious links in an SMS
                                messages. Developed in Android Studio and uses machine learning
                                model for links classification.
                            </p>
                            <div className={styles.buttons}>
                                <Link to={'https://github.com/pmcm4/LinkAlert'} target="_blank">
                                    <button className={styles.github}>GitHub</button>
                                </Link>
                            </div>
                        </figcaption>
                    </figure>

                    <figure>
                        <h1>FPR SENTI</h1>
                        <figcaption>
                            <h3>FPR SENTI</h3>
                            <p className={styles.figdesc}>
                                A web-based sentiment analysis tool that classifies product reviews
                                in tagalog. Developed using Flask and uses a machine learning model
                                for classifcation.
                            </p>
                            <div className={styles.buttons}>
                                <Link to={'https://github.com/pmcm4/fpr-senti'} target="_blank">
                                    <button className={styles.github}>GitHub</button>
                                </Link>

                                <Link
                                    to={'https://fpr-senti-9a308e70bbf6.herokuapp.com/'}
                                    target="_blank"
                                >
                                    <button className={styles.demo}>Demo</button>
                                </Link>
                            </div>
                        </figcaption>
                    </figure>

                    <figure>
                        <h1>NB API</h1>
                        <figcaption>
                            <h3>NB API</h3>
                            <p className={styles.figdesc}>
                                {' '}
                                A Naive Bayes algorithm API classifier trained on a dataset of links
                                to predict whether a link is malicious or benign.
                            </p>
                            <div className={styles.buttons}>
                                <Link to={'https://github.com/pmcm4/nb_api'} target="_blank">
                                    <button className={styles.github}>GitHub</button>
                                </Link>
                            </div>
                        </figcaption>
                    </figure>

                    <figure>
                        <h1>iPHOON</h1>
                        <figcaption>
                            <h3>iPHOON</h3>
                            <p className={styles.figdesc}>
                                A Java-based Typhoon Information Management System covering typhoons
                                from year 2000-2022, with efficient database queries for data
                                retrieval and management.
                            </p>
                            <div className={styles.buttons}>
                                <Link to={'https://github.com/pmcm4/iPhoon'} target="_blank">
                                    <button className={styles.github}>GitHub</button>
                                </Link>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
};
