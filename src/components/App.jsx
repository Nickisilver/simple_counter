import React from 'react';
import { Quiz } from './Quiz/Quiz';
import { EndGame } from './EndGame/EndGame';
import css from './App.module.css';

export const App = () => {
  const questions = [
    {
      title: 'React - это ... ?',
      variants: ['библиотека', 'фреймворк', 'приложение'],
      correct: 0,
    },
    {
      title: 'Компонент - это ... ',
      variants: [
        'приложение',
        'часть приложения или страницы',
        'то, что я не знаю что такое',
      ],
      correct: 1,
    },
    {
      title: 'Что такое JSX?',
      variants: [
        'Это простой HTML',
        'Это функция',
        'Это тот же HTML, но с возможностью выполнять JS-код',
      ],
      correct: 2,
    },
  ];

  const [step, setStep] = React.useState(0);
  const [count, setCount] = React.useState(0);

  function onAnswer(index) {
    setStep(step + 1);
    correctAnswer(index)
  }
  function reset() {
    setStep(0);
  }

  function correctAnswer(ask) {
    if(ask === questions[step].correct)(
      setCount(count + 1)
    )
  }

  return (
    <div className={css.wrapper}>
      {step !== questions.length ? (
        <Quiz
          question={questions[step]}
          onClick={onAnswer}
          step={step}
          allQuestions={questions.length}
          
        />
      ) : (
        <EndGame reset={reset} count={count} />
      )}
    </div>
  );
};
