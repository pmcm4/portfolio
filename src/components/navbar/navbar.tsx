import styles from './navbar.module.scss';
import classNames from 'classnames';

export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles.logoSpan}>PMCM</h1>
            <div className={styles.menu}>
                <h1 className={styles.menuItems}>HOME</h1>
                <h1 className={styles.menuItems}>ABOUT</h1>
                <h1 className={styles.menuItems}>PROJECTS</h1>
                <h1 className={styles.menuItems}>CONTACT</h1>
            </div>
        </div>
    );
};
