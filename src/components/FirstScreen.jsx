import styles from './FirstScreen.module.scss';
import SearchInput from "./SearchInput";

const FirstScreen = ({title, subtitle = null, showSearchBtn = false}) => {
    return (
        <div className={styles.firstScreen}>
            <div className="container">
                <h1 className={styles.header}>{title}</h1>
                {subtitle && <div className={styles.subtitle}>{subtitle}</div>}

                {showSearchBtn && <SearchInput className={styles.searchInput} type="text" placeholder='Search Plants'/>}
            </div>
        </div>
    )
};

export default FirstScreen;

