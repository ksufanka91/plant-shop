import styles from "./Nav.module.scss";

const Nav = () => {
    return (
        <div className={styles.itemsBox}>
            <a href="/" className={styles.navItem}>
                Home
            </a>
            <a href="/" className={styles.navItem}>
                Shop
            </a>
            <a href="/" className={styles.navItem}>
                About Us
            </a>
            <a href="/" className={styles.navItem}>
                Contact
            </a>
        </div>
    )
};

export default Nav;