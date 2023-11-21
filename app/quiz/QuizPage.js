"sue client"
import React, { useState } from 'react';

export default function QuizPage() {
    
    const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'A. Berlin', isCorrect: false },
                { answerText: 'B. Paris', isCorrect: true },
                { answerText: 'C. Rome', isCorrect: false },
                { answerText: 'D. Madrid', isCorrect: false },
            ],

            
        },
        {
            questionText: 'Which is the largest ocean in the world?',
            answerOptions: [
                { answerText: 'A. Atlantic Ocean', isCorrect: false },
                { answerText: 'B. Indian Ocean', isCorrect: false },
                { answerText: 'C. Pacific Ocean', isCorrect: true },
                { answerText: 'D. Arctic Ocean', isCorrect: false },
            ],

            
        },
        {
            questionText: 'Mount Everest is located in which mountain range?',
            answerOptions: [
                { answerText: 'Himalayas', isCorrect: true },
                { answerText: 'Andes', isCorrect: false },
                { answerText: 'Alps', isCorrect: false },
                { answerText: 'Rockies', isCorrect: false },
            ],

            
        },
        {
            questionText: 'Which country is also known as the Land of the Rising Sun?',
            answerOptions: [
                { answerText: 'India', isCorrect: false },
                { answerText: 'China', isCorrect: false },
                { answerText: 'South Korea', isCorrect: false },
                { answerText: 'Japan', isCorrect: true },
            ],

            
        },
        {
            questionText: 'The Great Barrier Reef is off the coast of which country?',
            answerOptions: [
                { answerText: 'South Africa', isCorrect: false },
                { answerText: 'Indonesia', isCorrect: false },
                { answerText: 'Brazil', isCorrect: false },
                { answerText: 'Australia', isCorrect: true },
            ],

            
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            alert(`You scored ${score + (isCorrect ? 1 : 0)} out of ${questions.length}`);
        }
    };

    return (
        <div className='quizContainer'>
            {quizFinished ? (
                <div>
                    <h1>Your Score: {score} out of {questions.length}</h1>
                    <button className='restartButton' onClick={restartQuiz}>Restart Quiz</button>
                </div>
            ) : (
                <div>
                    <h1 className="question">{questions[currentQuestion].questionText}</h1>
                    {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                        <button
                            key={index}
                            className="answerButton"
                            onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                            {answerOption.answerText}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
