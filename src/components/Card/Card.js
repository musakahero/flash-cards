import styles from './Card.module.css';

export const Card = ({ randomQuestion }) => {

    return (
        <>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <div className={styles.front}>
                        <p>{randomQuestion && randomQuestion.front}</p>
                    </div>
                    <div className={styles.back}>
                        <p>{randomQuestion && randomQuestion.back}</p>
                    </div>
                </div>
            </div>


        </>
    )
}
