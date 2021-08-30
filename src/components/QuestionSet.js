import React, { useState } from 'react';
import Header from './Header';

const QuestionSet = (props) => {

    const question = props.questions[props.number].question;
    const option1 = props.questions[props.number].answers.a;
    const option2 = props.questions[props.number].answers.b;
    const option3 = props.questions[props.number].answers.c;

    const [option1Color, setOption1Color] = useState();
    const [option2Color, setOption2Color] = useState();
    const [option3Color, setOption3Color] = useState();

    const [tracker1, setTracker1] = useState(false);
    const [tracker2, setTracker2] = useState(false);

    const check = (answer) => {  
        if(answer.target.innerText === props.correctAnswer){
            if(tracker1)return;
            setTracker1(true);
            if(!tracker2){
                props.setScoreDigit(props.scoreDigit + 1);
            }
            if(option1 === props.correctAnswer){
                setOption1Color(true)
              }else{
                setOption1Color(false)
            };
            if(option2 === props.correctAnswer){
                setOption2Color(true)
             }else{
               setOption2Color(false)
            };
            if(option3 === props.correctAnswer){
                setOption3Color(true)
              }else{
                setOption3Color(false)
              }; 
        }
        if(answer.target.innerText !== props.correctAnswer){
            setTracker2(true);
            if(tracker1)return;
            if(option1 === answer.target.innerText){
                setOption1Color(false);
            }
            if(option2 === answer.target.innerText){
                setOption2Color(false);
            }
            if(option3 === answer.target.innerText){
                setOption3Color(false);
            }
        }
    }

    return ( 
        <div className="question_container">
            <div className="header_container">
                <Header questions={props.questions} number={props.number} setNumber={props.setNumber} scoreDigit={props.scoreDigit} setOption1Color={setOption1Color} setOption2Color={setOption2Color} setOption3Color={setOption3Color} setTracker1={setTracker1} setTracker2={setTracker2}/>
            </div>
            <div>
                <div className="quiz_container">
                    <div className="question_text">
                        <p className="question">{question}</p>
                    </div>
                    <ul className="option_text">
                        <li onClick={check} className={`option option-1 ${option1Color === true ? 'green' : option1Color === false ? 'red' : null}`}>{option1}</li>
                        <li onClick={check} className={`option option-2 ${option2Color === true ? 'green' : option2Color === false ? 'red' : null}`}>{option2}</li>
                        <li onClick={check} className={`option option-3 ${option3Color === true ? 'green' : option3Color === false ? 'red' : null}`}>{option3}</li>
                    </ul>
                </div>
            </div>
        </div>
     );
};
 
export default QuestionSet;