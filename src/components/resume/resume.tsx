import styles from './resume.module.scss';
import classNames from 'classnames';

export interface ResumeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Resume = ({ className }: ResumeProps) => {
    return <div className={classNames(styles.root, className)}>Resume</div>;
};
