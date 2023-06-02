import styles from './Button.module.scss';
import * as cn from "classnames";

const Button = ({className = null, children, type = 'button', size = 'default', icon = false}) => {
    return (
        <button type={type}
                className={cn(styles.button, {
                    [styles.big]: size === 'big',
                    [styles.icon]: icon,
                }, className)}>
            {children}
        </button>
    )
};

// размер default - big - small - super-small
// форма default - icon

export default Button;