import styles from './Button.module.scss';
import classNames from "classnames";

const Button = ({className = null, children, type = 'button', size = 'default', icon = false}) => {
    return (
        <button type={type}
                className={classNames(styles.button, {
                    [styles.big]: size === 'big',
                    [styles.icon]: icon,
                }, className)}>
            {children}
        </button>
    )
};

export default Button;