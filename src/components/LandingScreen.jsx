import styles from './LandingScreen.module.scss';
import InputWithButton from "./UI/InputWithButton";

const LandingScreen = ({title, subtitle = null, showSearchBtn = false}) => {
    return (
        <div className={styles.landingScreen}>
            <div className="container">
                <h1 className={styles.header}>{title}</h1>
                {subtitle && <div className={styles.subtitle}>{subtitle}</div>}

                {showSearchBtn && <InputWithButton className={styles.searchInput} type="text" placeholder="Search Plants"/>}
            </div>
        </div>
    )
};

export default LandingScreen;

