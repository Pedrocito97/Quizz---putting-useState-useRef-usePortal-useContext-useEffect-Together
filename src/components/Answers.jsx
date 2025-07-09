import { useRef } from 'react';

export default function Answers({answers, selectedAnswer, answerState, onSelectAnswer}) {

    const shuffledAnswers = useRef();


    if(!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }



    return (
        <div>
            <ul id="answers" className="answer">
                {shuffledAnswers.current.map((answer, index) =>
                {
                    const isSelected = selectedAnswer === answer;
                    let cssClasses = '';
                    if(answerState === 'answered' && isSelected) {
                        cssClasses = 'selected';
                    }
                    if(answerState === 'correct' && isSelected) {
                        cssClasses = 'correct';
                    }
                    if(answerState === 'wrong' && isSelected) {
                        cssClasses = 'wrong';
                    }

                    return (
                        <li key={index}>
                            <button onClick={() => onSelectAnswer(answer)} className={cssClasses}>{answer}</button>
                        </li>    
                    )
                })}
            </ul>
        </div>
    )
}