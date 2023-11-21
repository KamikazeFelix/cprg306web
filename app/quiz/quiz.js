export default function Question({ question, onAnswer }) {
    return (
        <div className="border border-black w-96 m-4 p-4 bg-gradient-to-r from-blue-200 to-purple-200 container mx-auto mt-8 shadow-lg">
            <h2 className="text-xl font-bold mb-4">{question.questionText}</h2>
            <div className="flex flex-col space-y-2">
                {question.answerOptions.map((option, index) => (
                    <button 
                        key={index} 
                        onClick={() => onAnswer(option.isCorrect)}
                        className="p-2 bg-purple-300 rounded hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                        {option.answerText}
                    </button>
                ))}
            </div>
        </div>
    );
}
