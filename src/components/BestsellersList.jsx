import styles from './BestsellersList.module.scss';
import ProductItem from "./ProductItem";
import {Link} from 'react-router-dom'


const BestsellersList = ({products}) => {
    return (
        <div className={styles.BestsellersList}>
            <div className="container">
                <div className={styles.bestsellers}>
                    <div className={styles.bestsellersBox}>
                        <h2 className={styles.title}>Best Seller Product</h2>
                        <div className={styles.moreInfo}>
                            <Link to="/collection" className={styles.subtitle}>See all colection</Link>
                            <img src="assets/arrow.svg" alt="see all collection button"/>
                        </div>
                    </div>

                    <div className={styles.productItems}>
                        {products.map(product => (
                            <ProductItem key={product.id}
                                         image={product.image}
                                         title={product.name}
                                         price={product.price}
                                         rating={product.rating}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BestsellersList;