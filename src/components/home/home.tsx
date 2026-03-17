import React, { useMemo } from 'react';
import styles from './home.module.scss';
import classNames from 'classnames';
import { Navbar } from '../navbar/navbar';

export interface HomeProps {
    className?: string;
}

const CV_FILE_URL = '/Morato%20-%20Resume%202026.pdf';

export const Home = ({ className }: HomeProps) => {
    // Memoize the Text and Head components
    const Text = useMemo(() => {
        return ({ value }: { value: string }) => (
            <div className={styles.text}>
                {value.split('').map((char: string, i: number) => (
                    <div
                        className={styles.letter}
                        style={{ '--delay': `${i * 0.2}s` } as React.CSSProperties}
                        key={i} // Add a unique key to each child element
                    >
                        <span className={styles.source}>{char}</span>
                        <span className={styles.shadow}>{char}</span>
                        <span className={styles.overlay}>{char}</span>
                    </div>
                ))}
            </div>
        );
    }, []);

    const Head = useMemo(() => {
        return () => (
            <div className={styles.app}>
                <Text value="Paolo Miguel" />
                <Text value="C. Morato" />
            </div>
        );
    }, [Text]);

    const downloadfileURL = (url: string) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Morato-Resume-2026.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={classNames(styles.root, className)}>
            <Navbar />

            <div className={styles.body}>
                <div className={styles.topdiv}>
                    <div className={styles.left}>
                        <h1 className={styles.header}>
                            <span className={styles.intro}>
                                Hi! My name is
                                <br />
                            </span>
                            <Head />
                        </h1>
                        <div className={styles.typingtext}></div>
                    </div>
                </div>
                <div className={styles.timeline}>
                    <h1>
                        Scroll Down! <span className={styles.arrow}>&#8595;</span>
                    </h1>
                </div>
                <div className={styles.botdiv}>
                    <div className={styles.container}>
                        <h1 className={styles.introHead}>Quick Introduction</h1>
                        <p className={styles.introP}>
                            I am a DocOps Engineer at ITRS Phils Inc. with hands-on experience in
                            AI automation, documentation platforms, and CI/CD workflows. I graduated
                            with a Bachelor of Science in Computer Science from the Polytechnic
                            University of the Philippines as Cum Laude.
                            <br /> <br />
                            I build scalable web and automation solutions using JavaScript,
                            TypeScript, Python, React, Node.js, Docker, and Jenkins, while focusing
                            on performance, developer productivity, and user experience.
                            <br /> <br />
                            If you have any inquiries, please feel free to contact me.
                        </p>
                        <button
                            className={styles.cvBtn}
                            onClick={() => {
                                downloadfileURL(CV_FILE_URL);
                            }}
                        >
                            Download Resume
                        </button>
                    </div>
                </div>
            </div>
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
        </div>
    );
};
