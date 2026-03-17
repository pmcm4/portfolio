import styles from './resume.module.scss';
import classNames from 'classnames';

export interface ResumeProps {
    className?: string;
}
export const Resume = ({ className }: ResumeProps) => {
    return <div className={classNames(styles.root, className)}>Resume</div>;
};
