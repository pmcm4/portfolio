import styles from './home.module.scss';
import classNames from 'classnames';
import { Navbar } from '../navbar/navbar';

export interface HomeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const CV_FILE_URL = '/PaoloMoratoCV.pdf';

export const Home = ({ className }: HomeProps) => {
    const Text = ({ value }: { value: string }) => (
        <div className={styles.text}>
            {value.split('').map((char: string, i: number) => (
                <div
                    className={styles.letter}
                    style={{ '--delay': `${i * 0.2}s` } as React.CSSProperties}
                >
                    <span className={styles.source}>{char}</span>
                    <span className={styles.shadow}>{char}</span>
                    <span className={styles.overlay}>{char}</span>
                </div>
            ))}
        </div>
    );

    const Head = () => (
        <div className={styles.app}>
            <Text value="Paolo Miguel" />
            <Text value="C. Morato" />
        </div>
    );

    

    const downloadfileURL = (url: string) => {
        const a = document.createElement('a');
        a.href = url;
        a.download = 'PaoloMoratoCV.pdf'; // Set the desired filename here
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
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
                    <div className={styles.right}>
                        <img
                            src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1689264802/transparent-gif-wifflegif_ee80ma.gif"
                            alt="frontpage gif"
                            className={styles.homeImage}
                        />
                    </div>
                </div>
                <div className={styles.timeline}>
                    <h1>
                        My Introduction <span className={styles.arrow}>&#8595;</span>
                    </h1>
                </div>
                <div className={styles.botdiv}>
                    <div className={styles.container}>
                        <h1 className={styles.introHead}>INTRODUCTION</h1>
                        <p className={styles.introP}>
                            I am a third-year Computer Science student at the Polytechnic University
                            of the Philippines. My passion lies in Web Development, Software
                            Development, Machine Learning, Database Management, and Photoshop. I
                            have gained experience working with various tech stacks, including
                            programming languages, frameworks, databases, tools, and APIs.
                            Additionally, I enjoy incorporating Machine Learning algorithms into web
                            and software applications.
                            <br /> <br /> If you have any inquiries, please feel free to contact me.
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
        </div>
    );
};
