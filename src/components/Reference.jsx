import styles from './Reference.module.scss';

const Reference = () => {
    return (
        <div className={styles.reference}>
            <div className="container">
                <h2 className={styles.title}>Interior Plant Reference</h2>
                <div className={styles.subtitle}>make your home so comfortable with refreshing plants</div>
                <div className={styles.referenceBox}>
                    <div className={styles.referenceBoxColumn}>
                        <img src="assets/interior-1.jpg" alt="living room interior" className={styles.referenceBoxImage}/>
                        <img src="assets/interior-2.jpg" alt="study interior" className={styles.referenceBoxImage}/>
                    </div>
                    <div className={styles.referenceBoxColumn}>
                        <img src="assets/interior-3.jpg" alt="bedroom interior" className={styles.referenceBoxImage}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Reference;