import React, { useState } from "react";
import QuestionSet from './QuestionSet';
import Result from "./Result";
import Start from "./Start";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import './Index.css';

const questions = [
  {
    question: "Who invented JavaScript ?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },

  {
    question: "Which one of these is a JavaScript package manager ?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c"
  },

  {
    question: "Which tool can you use to ensure code quality ?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "ESLint"
    },
    correctAnswer: "b"
  },

  {
    question: "The World Largest desert is ?",
    answers: {
      a: "Thar",
      b: "Sahara",
      c:"Sonoran"
    },
    correctAnswer: "b"
  },

  {
    question: "Country that has the highest in Barley Production ?",
    answers: {
      a: "China",
      b: "Russia",
      c:"France"
    },
    correctAnswer: "c"
  },

  {
    question: "The metal whose salts are sensitive to light is ?",
    answers: {
      a: "Zinc",
      b: "Silver",
      c:"Aluminium"
    },
    correctAnswer: "b"
  },

  {
    question: "Black soils are best suited for the cultivation of ?",
    answers: {
      a: "Cotton",
      b: "Rice",
      c:"Sugarcane"
    },
    correctAnswer: "a"
  },

  {
    question: "The gas used for making vegetables is ?",
    answers: {
      a: "Oxygen",
      b: "Carbon dioxide",
      c:"Hydrogen"
    },
    correctAnswer: "c"
  },

  {
    question: "Country that was called as Land of Rising Sun ?",
    answers: {
      a: "Japan",
      b: "Korea",
      c:"Taiwan"
    },
    correctAnswer: "a"
  },

  {
    question: "The hottest planet in the solar system ?",
    answers: {
      a: "Mercury",
      b: "Jupiter",
      c:"Venus"
    },
    correctAnswer: "c"
  },

  {
    question: "Who developed Yahoo ?",
    answers: {
      a: "Mark Zukerberg",
      b: "David Filo & Jerry Yang",
      c:"Bill Gates"
    },
    correctAnswer: "b"
  },

  {
    question: "DB computer abbreviation usually means ?",
    answers: {
      a: "Data Block",
      b: "Double Byte",
      c:"Database"
    },
    correctAnswer: "c"
  },

  {
    question: " Who is the founder of facebook ?",
    answers: {
      a: "Mark Zukerberg",
      b: "Jeff Bezos",
      c: "Bill Gates"
    },
    correctAnswer: "a"
  },

  {
    question: "Who is Donald Fuking trump ?",
    answers: {
      a: "British Cunt",
      b: "American Dickhead",
      c: "Russian Wanker"
    },
    correctAnswer: "b"
  }
];

const App = () => {
  const [number, setNumber] = useState(0);
  const [scoreDigit, setScoreDigit] = useState(0);
  const correctAnswer = questions[number].answers[questions[number].correctAnswer];

    return (
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" >
                <div className="start_page">
                    <Start number={number} setNumber={setNumber} setScoreDigit={setScoreDigit}/>
                </div>
              </Route>
            </Switch>

            <Switch>
              <Route exact path="/questions">
                <div className="question_page">
                  <QuestionSet questions={questions} number={number} setNumber={setNumber} correctAnswer={correctAnswer} scoreDigit={scoreDigit} setScoreDigit={setScoreDigit} />
                </div>
              </Route>
            </Switch>

            <Switch>
              <Route exact path="/results" >
                <div className="result_page">
                   <Result questions={questions} scoreDigit={scoreDigit} />
                </div>
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
    );
};

export default App;