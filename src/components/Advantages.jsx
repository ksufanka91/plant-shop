import IconWithText from "./UI/IconWithText";
import styles from './Advantages.module.scss';

const Advantages = ({advantages}) => {
    return (
        <div className={styles.advantages}>
            <div className="container">
                <div className={styles.contentBox}>
                    {advantages.map(item => (
                        <IconWithText className={styles.item}
                                      iconBig={true}
                                      key={item.id}
                                      icon={item.icon}
                                      title={item.title}
                                      description={item.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Advantages;