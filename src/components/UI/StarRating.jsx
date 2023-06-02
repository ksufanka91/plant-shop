import {useState} from "react";
import createArray from "../../utils/createArray";
import Star from './Star';
import styles from './StarRating.module.scss';

const StarRating = ({totalStars = 5, rating = 0}) => {
    const [selectedStars, setSelectedStars] = useState(rating);

    return (
        <div className={styles.rating}>
            {createArray(totalStars).map((n, i) => (
                <Star key={i} selected={selectedStars > i} onClick={() => setSelectedStars(i + 1)}/>
            ))}
        </div>
    )
};

export default StarRating;