import QUESTIONS from '../question';
import { useState, useCallback } from 'react';
import logoImg from '../assets/quiz-complete.png';
import Questions from './Questions';

export default function Quiz() {
    
    const [answerState, setAnswerState] = useState('');
    const [userAnswer, setUserAnswer] = useState([]);

    const activeQuestionIndex = answerState === '' ? userAnswer.length : userAnswer.length - 1;

    const quizIsFinished = QUESTIONS.length === userAnswer.length;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setAnswerState('answered');
        setUserAnswer(prevUserAnswer => {
            return [...prevUserAnswer, selectedAnswer]
        });
        setTimeout(() => {
            if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState('correct');
            } else {
                setAnswerState('wrong');
            }
        }, 1000);

        setTimeout(() => {
            setAnswerState('');
        }, 2000);

    }, [activeQuestionIndex]);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null),
        [handleSelectAnswer]
    );

    if (quizIsFinished) {
        return (
            <div id="summary">
                <img src={logoImg} alt="Quiz complete" />
                <h2>Quiz Completed!</h2>
            </div>
        )
    }

    return (
        <div id="quiz">
            <Questions 
                key={activeQuestionIndex}
                QuestionText={QUESTIONS[activeQuestionIndex].text} 
                answers={QUESTIONS[activeQuestionIndex].answers} 
                selectedAnswer={userAnswer[userAnswer.length - 1]} 
                answerState={answerState}
                onSelectAnswer={handleSelectAnswer}
            />
        </div>
        
    )
}