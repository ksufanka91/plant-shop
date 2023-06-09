import Nav from './Nav'
import styles from './Header.module.scss'
import * as cn from 'classnames'
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.navigation}>
                    <div className={styles.navigationItem}>
                        <Link to="/" className={styles.logo}>
                            <img src="assets/logo.svg" alt="main site logo"/>
                        </Link>
                    </div>

                    <div className={cn(styles.navigationItem, styles.navigationItemNav)}>
                        <Nav show={true}/>
                    </div>

                    <div className={styles.navigationItem}>
                        <img src="assets/header-cart.svg" className={styles.cart} alt="cart for purchase"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;