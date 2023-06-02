import * as cn from "classnames";
import styles from './Star.module.scss';

const Star = ({onClick, selected = false}) => {
    return <img src={selected ? '/assets/star-rating-selected.svg' : '/assets/star-rating.svg'}
                alt="star"
                onClick={onClick}
                className={cn(styles.starIcon)}
    />;
}

export default Star;