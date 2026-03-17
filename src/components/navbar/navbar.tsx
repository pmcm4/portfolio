import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

export interface NavbarProps {
    className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={classNames(styles.root, className)}>
            <Link to={'/'}>
                <h1 className={styles.logoSpan}>PMCM</h1>
            </Link>
            <ul className={`${styles.menu} ${isActive ? styles.active : ''}`}>
                <li className={styles.navItems}>
                    <Link to={'/'} className={styles.menuItems}>
                        HOME
                    </Link>
                </li>
                <li className={styles.navItems}>
                    <Link to={'/about'} className={styles.menuItems}>
                        ABOUT
                    </Link>
                </li>
                <li className={styles.navItems}>
                    <Link to={'/projects'} className={styles.menuItems}>
                        PROJECTS
                    </Link>
                </li>
                <li className={styles.navItems}>
                    <Link to={'/contact'} className={styles.menuItems}>
                        CONTACT
                    </Link>
                </li>
            </ul>
            <div
                className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
                onClick={toggleMenu}
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </div>
    );
};
