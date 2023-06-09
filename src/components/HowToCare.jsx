import * as cn from "classnames";
import styles from './HowToCare.module.scss';
import IconWithText from "./UI/IconWithText";


const HowToCare = ({howToCare}) => {
    return (
        <div className={styles.howToCare}>
            <div className="container">
                <div className={styles.howToCareBox}>
                    <div className={cn(styles.column, styles.columnLeft)}>
                        <h2 className={styles.title}>How to care for plants</h2>
                        <div className={styles.subtitle}>Take care of plants with all your heart</div>
                        <div className={styles.iconsWithTextBox}>
                            {howToCare.map(item => (
                                <IconWithText
                                    className={styles.iconWithText}
                                    key={item.id}
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.column}>
                        <img src="assets/care-plants.jpg" alt="plants"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HowToCare;