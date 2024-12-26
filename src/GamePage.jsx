import React, { useState, useEffect } from 'react';
import { DotLoader } from 'react-spinners';
import bibleQuestions from './biblequestion';

const GamePage = () => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [scores, setScores] = useState({ player1: 0, player2: 0 });
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const shuffledQuestions = [...bibleQuestions].sort(() => Math.random() - 0.5);
      setQuestions(shuffledQuestions.slice(0, 10)); // Limit to 10 questions
      setLoading(false);
    }, 3000); // Simulate loading
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScores((prev) => ({
        ...prev,
        [`player${currentPlayer}`]: prev[`player${currentPlayer}`] + 1,
      }));
    }

    if (currentQuestion === questions.length - 1) {
      setGameOver(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setCurrentPlayer(1);
    setScores({ player1: 0, player2: 0 });
    setGameOver(false);
    const shuffledQuestions = [...bibleQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions.slice(0, 10));
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
        {loading ? (
          <div className="flex items-center justify-center">
            <DotLoader color="#FFD700" size={window.innerWidth < 768 ? 100 : 200} />
          </div>
        ) : gameOver ? (
          <div className="text-center space-y-4 w-full max-w-md px-4">
            <h2 className="text-2xl md:text-4xl font-press-start mb-4 md:mb-8 text-white">Game Over! 🎮</h2>
            <div className="text-lg md:text-2xl text-white">
              <p>Player 1 Score: {scores.player1} 🌟</p>
              <p>Player 2 Score: {scores.player2} 🌟</p>
            </div>
            <div className="text-xl md:text-3xl font-press-start mt-4 md:mt-8 text-yellow-400">
              {scores.player1 === scores.player2 ? (
                "It's a tie! 🤝"
              ) : (
                `Player ${scores.player1 > scores.player2 ? '1' : '2'} Wins! 🏆`
              )}
            </div>
            <button
              onClick={restartGame}
              className="mt-6 px-6 py-3 md:px-8 md:py-4 bg-yellow-400 rounded-xl font-press-start text-black hover:bg-yellow-300 transform hover:scale-105 transition text-sm md:text-base"
            >
              Play Again! 🎮
            </button>
          </div>
        ) : (
          <div className="bg-violet-800 p-4 md:p-8 rounded-xl shadow-lg w-full max-w-2xl text-white space-y-4 md:space-y-6">
            <div className="flex justify-between mb-4 md:mb-8">
              <span className="text-base md:text-xl">Player 1: {scores.player1} 🌟</span>
              <span className="text-base md:text-xl">Player 2: {scores.player2} 🌟</span>
            </div>
            <div>
              <p className="text-lg md:text-xl mb-2 md:mb-4 font-press-start">
                Player {currentPlayer}'s Turn
              </p>
              <h2 className="text-xl md:text-2xl mb-4 md:mb-6 overflow-hidden text-ellipsis">
                {questions[currentQuestion]?.question}
              </h2>
              <div className="grid grid-cols-2 phone:grid-cols-1 gap-3 md:gap-4">
                {[
                  ...questions[currentQuestion]?.incorrect_answers,
                  questions[currentQuestion]?.correct_answer,
                ]
                  .sort(() => Math.random() - 0.5)
                  .map((answer, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        handleAnswer(
                          answer === questions[currentQuestion].correct_answer
                        )
                      }
                      className="bg-yellow-400 text-black p-3 md:p-4 rounded-lg hover:bg-yellow-300 transform hover:scale-105 transition text-sm md:text-base"
                    >
                      {answer}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePage;
