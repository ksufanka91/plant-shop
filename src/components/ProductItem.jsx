import styles from './ProductItem.module.scss';
import Button from "./Button";
import StarRating from "./UI/StarRating";
import * as cn from 'classnames';

const ProductItem = ({image, title, price, rating, className}) => {
    return (
        <div className={cn(styles.productItem, className)}>
            <img src={image} alt={title} className={styles.image}/>

            <div className={styles.productItemInfo}>
                <div className={styles.productItemTitle}>{title}</div>
                <StarRating rating={rating}/>
                <div className={styles.priceBox}>
                    <div className={styles.price}>{'$' + price}</div>

                    <Button size={'big'} icon={true}>
                        <img src="/assets/plus-icon.svg" alt="add product to cart"/>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;