import IconWithText from "./IconWithText";
import styles from './Advantages.module.scss';

const Advantages = () => {
    return (
        <div className={styles.advantages}>
            <div className="container">
                <div className={styles.contentBox}>
                    <IconWithText icon={'assets/adv-icon-1.svg'}
                                  title={'Free Shipping'}
                                  description={'No charge for each delivery'}
                                  className={styles.item}
                                  iconBig={true}/>
                    <IconWithText icon={'assets/adv-icon-2.svg'}
                                  title={'Quick Payment'}
                                  description={'100% secure payment'}
                                  className={styles.item}
                                  iconBig={true}/>
                    <IconWithText icon={'assets/adv-icon-3.svg'}
                                  title={'24/7 Support'}
                                  description={'Quick support'}
                                  className={styles.item}
                                  iconBig={true}/>
                </div>
            </div>
        </div>
    )
};

export default Advantages;