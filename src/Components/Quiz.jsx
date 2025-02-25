import React from 'react'
import { useState } from 'react';
import questions from '../utils/questions.json'

export const Quiz = () => {

    const question = questions[0].question

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isDone, setIsDone] = useState(false);
    const [typeCount, setTypeCount] = useState([
        { "A": 0 }, { "E": 0 },
        { "L": 0 }, { "R": 0 }
    ]);

    const handleQuestions = () => {
        setCurrentQuestion((prevQuestion) => {
            if (prevQuestion < questions.length - 1) {
                return prevQuestion + 1;
            } else {
                setIsDone(true);
                return prevQuestion;
            }
        });
    };

    const handleAnswers = (answer) => {
        setTypeCount()
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {question}
            </h1>
            <button onClick={() => handleAnswers()}>Agree</button>
            <button onClick={() => handleAnswers()} >Disagree</button>
        </div >
    )
}
