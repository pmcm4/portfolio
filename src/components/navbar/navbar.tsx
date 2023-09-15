import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';
import classNames from 'classnames';
import { StyleSharp } from '@mui/icons-material';
import { useState } from 'react';

export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar = ({ className }: NavbarProps) => {
    
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
      setIsActive(!isActive);
    };



    return (
        <div className={classNames(styles.root, className)}>
            <Link to={"/"}>
            <h1 className={styles.logoSpan}>PMCM</h1>
            </Link>
           {/* <div className={styles.menu}>
                <Link to={"/"}>
                <h1 className={styles.menuItems}>HOME</h1>
                </Link > 
                <Link to={"/about"}>
                <h1 className={styles.menuItems}>ABOUT</h1>
                </Link > 

                <Link to={"/projects"}>
                <h1 className={styles.menuItems}>PROJECTS</h1>
                </Link>

                <Link to={"/contact"}>
                <h1 className={styles.menuItems}>CONTACT</h1>
                 </Link> 

            </div>*/}
            <ul className={`${styles.menu} ${isActive ? styles.active : ''}`}>
                <Link to={"/"}>
                    <li className={styles.navItems}>
                        <a className={styles.menuItems}>HOME</a>
                    </li>
                </Link>

                <Link to={"/about"}>
                <li className={styles.navItems}>
                    <a className={styles.menuItems}>ABOUT</a>
                </li>
                </Link>

                <Link to={"/projects"}>
                <li className={styles.navItems}>
                    <a className={styles.menuItems}>PROJECTS</a>
                </li>
                </Link>
                
                <Link to={"/contact"}>
                <li className={styles.navItems}>
                    <a className={styles.menuItems}>CONTACT</a>
                </li>
                </Link>
            </ul>
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleMenu}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>


        </div>
    );
};
