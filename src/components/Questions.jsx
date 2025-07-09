import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
import { useState } from 'react';
import QUESTIONS from '../data/questions';

export default function Questions({key,QuestionText, answers, onSelectAnswer, selectedAnswer, answerState, handleSkipAnswer}) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    })

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[key].answers.indexOf(answer) === QUESTIONS[key].correctAnswerIndex
            })
        }, 1000)
    }

    return (
        <div id="question">
                <QuestionTimer
                    timeout={15000} 
                    onTimeout={handleSkipAnswer} 
                />
            <h2>{QuestionText}</h2>
            <Answers 
                answers={answers} 
                selectedAnswer={selectedAnswer} 
                answerState={answerState}
                onSelectAnswer={handleSelectAnswer}
            />
            </div>
    )
}