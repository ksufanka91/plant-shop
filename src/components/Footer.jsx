import styles from './Footer.module.scss';
import SearchInput from "./SearchInput";
import {Link} from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.footerBox}>
                    <div className={styles.subscribe}>
                        <h3 className={styles.footerTitle}>Newsletter</h3>
                        <SearchInput type="text" placeholder='Enter your email' btnText={'Subscribe'}/>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <a href="/" className={styles.title}>Support</a>
                            <Link to="/about" className={styles.text}>About Us</Link>
                            <a href="/" className={styles.text}>Careers</a>
                            <a href="/" className={styles.text}>Blog</a>
                        </div>

                        <div className={styles.item}>
                            <a href="/" className={styles.title}>Useful Link</a>
                            <a href="/" className={styles.text}>Payment & Tax</a>
                            <a href="/" className={styles.text}>Team of service</a>
                            <a href="/" className={styles.text}>Privacy Policy</a>
                        </div>

                        <div className={styles.item}>
                            <a href="/" className={styles.title}>Our Menu</a>
                            <a href="/" className={styles.text}>Best Product</a>
                            <a href="/" className={styles.text}>Category</a>
                        </div>

                        <div className={styles.item}>
                            <a href="/" className={styles.title}>Address</a>
                            <a href="/" className={styles.text}>JL. Setiabudhi No. 193 Sukasari, Bandung
                                West Java, Indonesia</a>
                            <a href="mailto: hallo@daunku.com" className={styles.text}>hallo@daunku.com</a>
                        </div>
                    </div>
                </div>
                <div className={styles.rights}>© {year} Daunku - All rights reserved.</div>
            </div>
        </div>
    )
};

export default Footer;