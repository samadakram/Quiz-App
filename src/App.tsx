import React from 'react';

// Import Components

const App = () => {

  const startTrivia = async () => {}

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {}

  const nextQuestion = () => {}

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Question...</p>
    </div>
  );
}

export default App;
