import React, { useMemo, useRef } from 'react'; // Import React and necessary hooks
import styles from './home.module.scss';
import classNames from 'classnames';
import { Navbar } from '../navbar/navbar';

export interface HomeProps {
    className?: string;
}

const CV_FILE_URL = '/PaoloMoratoCV2024.pdf';

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
    }, []);

    const downloadLinkRef = useRef<HTMLAnchorElement>(null);

    const downloadfileURL = (url: string) => {
        if (downloadLinkRef.current) {
            downloadLinkRef.current.href = url;
            downloadLinkRef.current.click();
        }
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
                            I am an upcoming Computer Science graduate from the Polytechnic
                            University of the Philippines with a passion for Web Development,
                            Software Development, Database Management, and Graphic Design using
                            Adobe Photoshop. I have experience working with various tech stacks,
                            including programming languages, frameworks, databases, tools, and APIs.
                            <br /> <br /> If you have any inquiries, please feel free to contact me.
                        </p>
                        {/* Use the downloadLinkRef to trigger the download */}
                        <a
                            ref={downloadLinkRef}
                            style={{ display: 'none' }} // Hide the link
                            target="_blank"
                            rel="noopener noreferrer"
                            download="PaoloMoratoCV.pdf" // Set the desired filename here
                        />
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
