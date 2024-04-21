import styles from './about.module.scss';
import classNames from 'classnames';
import { Navbar } from '../navbar/navbar';
import { useEffect } from 'react';

export interface AboutProps {
    className?: string;
}
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const About = ({ className }: AboutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Navbar />
            <div className={styles.body}>
                <div className={styles.top}>
                    <h1 className={styles.AboutHead}>About me</h1>
                    <span className={styles.aboutP}>
                        Hey there! I'm Paolo Miguel C. Morato, and I live in Marikina City.
                        Currently, I'm studying Computer Science at the Polytechnic University of
                        the Philippines.
                        <br />
                        <br /> My passion for computers started at a young age, just like any other
                        kid who loves playing computer games. But what really got me hooked was my
                        curiosity about how things actually work inside a computer.
                        <br />
                        <br /> Besides coding and gaming, I'm also a big fan of watching movies and
                        TV series. It's a great way for me to relax and get inspired. If you have
                        any questions or just want to chat, feel free to reach out to me.
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
                                    <time>2009</time>
                                    We had our first family computer, and this was the year I
                                    started getting hooked on computer games like Facebook games,
                                    Adobe Flash games, and DOTA. I also began studying Microsoft
                                    applications such as Word, Excel, and PowerPoint.{' '}
                                </div>
                            </li>
                            <li>
                                <div>
                                    <time>2015</time>I started to explore Adobe editing tools such
                                    as Photoshop, Premiere Pro, and Adobe After Effects.
                                </div>
                            </li>
                            <li>
                                <div>
                                    <time>2018</time>I finished Junior High School and entered AMA
                                    East Rizal for my Senior High School, where I decided to pursue
                                    the STEM strand. This was also the year I made the decision to
                                    pursue a computer-related course in college.{' '}
                                </div>
                            </li>
                            <li>
                                <div>
                                    <time>2020</time>I finished my senior high school and got
                                    accepted into Polytechnic University of the Philippines. During
                                    my freshman year, I didn't really appreciate my programming
                                    subjects because we mostly worked with the C language and our
                                    programs only produced command line interface (CLI) outputs.
                                    However, I later realized that this experience provided a solid
                                    foundation for the subsequent years.{' '}
                                </div>
                            </li>
                            <li>
                                <div>
                                    <time>2021</time>I became hooked on Java programming due to
                                    Swing. I noticed that Swing is quite similar to Photoshop, but
                                    it allows for the creation of graphical user interfaces (GUIs)
                                    in Java. This not only led me to appreciate our programming
                                    subjects but also resulted in my learning software development
                                    through the projects we worked on that year, which required GUI
                                    development.{' '}
                                </div>
                            </li>
                            <li>
                                <div>
                                    <time>2022</time>I began exploring JavaScript, TypeScript, and
                                    Python. During this year, I delved into web development using
                                    React frameworks. Additionally, I was introduced to various
                                    machine learning models that I found both intriguing and useful
                                    for numerous projects.{' '}
                                </div>
                            </li>
                            <li>
                                <div>
                                    <time>2023</time>
                                    During my third year in college, I can confidently say that the
                                    first semester was the most challenging but also packed with
                                    valuable lessons. In our Automata subject, which was the
                                    toughest and most stressful course that semester, I learned how
                                    to use Android Studio through our required project.
                                    Additionally, I delved deeper into exploring various machine
                                    learning models and started incorporating them into my projects.
                                    <br /> <br />
                                    I also gained a deeper understanding of how programming
                                    languages work through our Principles of Programming Language
                                    subject, where we undertook a compiler project. Currently, I am
                                    still exploring machine learning models that greatly interest me
                                    for implementation in web and software projects.
                                    <br /> <br />
                                    Lastly, we have commenced our Thesis, which will undoubtedly be
                                    the greatest challenge of our entire college journey.
                                </div>
                            </li>
                            <li>
                                <div>
                                    <time>2024</time>
                                    We successfully defended our thesis, and it won 2nd place in a
                                    research competition with a PHP 75,000 reward. I am now
                                    finishing my final semester and am expected to graduate in
                                    September 2024. Currently, I am seeking opportunities to start
                                    my professional career.
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
