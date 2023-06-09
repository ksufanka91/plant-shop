import styles from './IconWithText.module.scss';
import * as cn from "classnames";

const IconWithText = ({icon, title, description, className = null, iconBig = false}) => {
    return (
        <div className={cn(styles.contentBox, className)}>
            <img src={icon} alt={title} className={cn(styles.icon, {
                [styles.iconBig]: iconBig
            })}/>
            <div>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    )
};

export default IconWithText;