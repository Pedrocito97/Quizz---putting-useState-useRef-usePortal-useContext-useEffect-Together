import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeout }) {

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('Setting timeout: ', timeout);
        const timer = setTimeout(onTimeout, timeout);
        return () => clearTimeout(timer);
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log('Setting interval: ', timeout);
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        }, 100);
        return () => clearInterval(interval);
    }, []);



    return (
        <progress value={remainingTime} max={timeout} id="question-timer" />
    )
            
    
}