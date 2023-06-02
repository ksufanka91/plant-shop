import * as cn from "classnames";
import styles from './HowToCare.module.scss';
import IconWithText from "./IconWithText";

const HowToCare = () => {
    return (
        <div className={styles.howToCare}>
            <div className="container">
                <div className={styles.howToCareBox}>
                    <div className={cn(styles.column, styles.columnLeft)}>
                        <h2 className={styles.title}>How to care for plants</h2>
                        <div className={styles.subtitle}>Take care of plants with all your heart</div>
                        <div className={styles.iconsWithTextBox}>
                            <IconWithText
                                icon={'/assets/how-to-care-icon-1.svg'}
                                title={'Adjust Lighting'}
                                description={'When caring for indoor plants, make sure the room temperature is neither too cold nor too hot'}
                                className={styles.iconWithText}/>
                            <IconWithText
                                icon={'/assets/how-to-care-icon-2.svg'}
                                title={'Don\'t water too often'}
                                description={'Watering ornamental plants indoors does not have to be done every day.'}
                                className={styles.iconWithText}/>
                            <IconWithText
                                icon={'/assets/how-to-care-icon-3.svg'}
                                title={'Don\'t water too often'}
                                description={'Watering ornamental plants indoors does not have to be done every day.'}
                                className={styles.iconWithText}/>
                            <IconWithText
                                icon={'/assets/how-to-care-icon-4.svg'}
                                title={'Fertilize regularly'}
                                description={'The nutrients most indoor houseplants need are nitrogen for balance and potassium for stem strength'}
                                className={styles.iconWithText}/>
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