import {useState} from "react";
import Nav from './Nav'
import styles from './Header.module.scss'
import * as cn from 'classnames'

function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.navigation}>
                    <div className={styles.navigationItem}>
                        <a href="/" className={styles.logo}>
                            <img src="assets/logo.svg" alt="main site logo"/>
                        </a>
                    </div>

                    <div className={cn(styles.navigationItem, styles.navigationItemNav)}>
                        <Nav show={true}/>
                    </div>

                    <div className={styles.navigationItem}>
                        {/*<Burger navShow={true} setNavShow={true}/>*/}

                        <img src="assets/header-cart.svg" className={styles.cart} alt="cart for purchase"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;