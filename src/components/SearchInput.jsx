import Button from "./Button";
import styles from './SearchInput.module.scss';
import * as cn from "classnames";

const SearchInput = ({className, placeholder, type, btnText = null}) => {
    /**
     * Если у кнопки есть текст, то чтобы текст помещался на мобиле, мы переносим кнопку под инпут
     * И так же делаем инпут чуть меньше, чтобы он был одного размера с кнопкой (так смотрится аккуратней)
     */
    const btnHasText = !!btnText;

    return (
        <form className={cn(styles.form, className)}>
            <input
                className={cn(styles.input, {[styles.inputSmallOnMobile]: btnHasText})}
                type={type}
                placeholder={placeholder}/>

            <Button type={'submit'} icon={!btnText}
                    className={cn(styles.button, {[styles.buttonUnderOnMobile]: btnHasText})}>
                {btnText ? btnText : <img src={"/assets/search-icon.svg"} alt="search button"/>}
            </Button>
        </form>
    )
};

export default SearchInput;