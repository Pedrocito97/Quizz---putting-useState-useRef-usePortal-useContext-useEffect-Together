import QUESTIONS from '../question';
import { useState } from 'react';

export default function Quiz() {
    const [userAnswer, setUserAnswer] = useState([]);
    
    const activeQuestionIndex = userAnswer.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswer(prevUserAnswer => {
            return [...prevUserAnswer, selectedAnswer]
        });
    }

    return (
        <div id="quiz">
            <div id="question">
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers" className="answer">
                {QUESTIONS[activeQuestionIndex].answers.map((answer, index) =>
                {
                    return (
                        <li key={index}>
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>    
                    )
                })}
            </ul>
            </div>
        </div>
        
    )
}