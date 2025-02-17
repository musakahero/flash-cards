# About FlashCards

This is a simple app that displays flash cards with questions selected randomly. The questions/answers are pulled from a local JSON file.

## Finding and formatting the JSON questions storage
The storage for the questions/answers is a JSON file named "questions.json". It must have the following structure: 
    {
        "questionsAndAnswers": [
            {
                "front": "What is an Instruction Set Architecture (ISA)?",
                "back": "The interface between hardware and software, defining instructions a processor can execute"
            },
            {
                "front": "List three components that determine CPU time according to the performance equation.",
                "back": "Instruction Count, CPI (Cycles Per Instruction), Clock Cycle Time (or Clock Rate)"
            },
            ...etc
        ]
    }

The "front" value will contain your question, and the "back" value will be the answer. You can have as many question-answer objects as you like. 

## Keeping score
Clicking "Correct" or "Incorrect" will indicate if it you provided right answer or not. The score will be displayed in the scoreboard below and kept in the browser's Local Storage. Clicking the "RESET" button will clear the score from the browser's Local Storage.

# About Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
