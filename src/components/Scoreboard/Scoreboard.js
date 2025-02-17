import styles from './Scoreboard.module.css';

export const Scoreboard = ({correctCount, incorrectCount}) => {
    return (
        <div className={styles.sbContainer}>
            <span>✅: {correctCount}</span>
            <span>❌: {incorrectCount}</span>
        </div>
    )
}