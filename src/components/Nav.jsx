import styles from "./Nav.module.scss";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className={styles.itemsBox}>
            <Link to="/" className={styles.navItem}>
                Home
            </Link>
            <Link to="/shop" className={styles.navItem}>
                Shop
            </Link>
            <Link to="/about" className={styles.navItem}>
                About Us
            </Link>
            <Link to="/contacts" className={styles.navItem}>
                Contact
            </Link>
        </div>
    )
};

export default Nav;