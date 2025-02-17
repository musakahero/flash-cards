import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';
import { Scoreboard } from './components/Scoreboard/Scoreboard';
import data from './questions.json';

function App() {

  const [qaData, setQaData] = useState([]);
  const [randomQuestion, setRandomQuestion] = useState(null);
  const [score, setScore] = useState(() => {
    return JSON.parse(localStorage.getItem("score")) || { correct: 0, incorrect: 0 };
  });


  //Random question picker
  const pickRandomQuestion = () => {
    if (qaData.length > 0) {
      const randomIndex = Math.floor(Math.random() * qaData.length);
      setRandomQuestion(qaData[randomIndex]);
    }
  }

  //Add to score on button click
  const handleScore = (isCorrect) => {
    setScore((prev) => ({
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      incorrect: !isCorrect ? prev.incorrect + 1 : prev.incorrect,
    }));
    pickRandomQuestion();
  };

  //Reset score in localStorage
  const resetScore = () => {
    setScore({ correct: 0, incorrect: 0 });
    localStorage.removeItem("score");
  };

  // Read the QA data on mount
  useEffect(() => {
    setQaData(prev => [...data.questionsAndAnswers]);
  }, []);
  //Read the state from localStorage
  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score))
  }, [score])
  //Pull random question when qaData is imported
  useEffect(() => {
    pickRandomQuestion()
  }, [qaData]);

  return (
    <div className={styles.app}>
      <section className={styles.main}>
        <div className={styles.cardContainer}>
          <Card randomQuestion={randomQuestion} />
        </div>
        <div className={styles.btnContainer}>
          <Button label={'Correct'} labelColor={'--true-font-color'} colorType={'correct'} clickHandler={() => {
            handleScore(true)
          }} />
          <Button label={'Incorrect'} labelColor={'--false-font-color'} colorType={'incorrect'} clickHandler={() => {
            handleScore(false);
          }} />
        </div>
        <Scoreboard correctCount={score.correct} incorrectCount={score.incorrect} />
        <Button label={'RESET'} labelColor={'--main-font-color'} clickHandler={resetScore} />
      </section>


    </div>
  );
}

export default App;
