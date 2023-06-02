import styles from './FirstScreen.module.scss';
import SearchInput from "./SearchInput";

const FirstScreen = () => {
    return (
        <div className={styles.firstScreen}>
            <div className="container">
                <h1 className={styles.header}>Bring Serenity to Your Place With Interior Plants</h1>
                <div className={styles.subtitle}>
                    find your dream plant for you home decoration with us, and we will make it happen.
                </div>

                <SearchInput className={styles.searchInput} type="text" placeholder='Search Plants'/>
            </div>
        </div>
    )
};

export default FirstScreen;

