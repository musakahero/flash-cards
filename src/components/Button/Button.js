import styles from './Button.module.css';

export const Button = ({ label, clickHandler, colorType }) => {

    // Assign additional btn styling accoridng to colorType
    let btnStyle;

    switch(colorType){
        case 'correct': btnStyle = `${styles.btn} ${styles.btnTrue}`;
        break;
        case 'incorrect': btnStyle = `${styles.btn} ${styles.btnFalse}`;
        break;
        default: btnStyle =`${styles.btn}`;
    }

    return (
        <div className={btnStyle} onClick={clickHandler}>
            <span>{label}</span>
        </div>
    )
}