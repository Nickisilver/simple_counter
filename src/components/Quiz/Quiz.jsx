import css from './Quiz.module.css';

export const Quiz = ({question, onClick , step, allQuestions}) => {

const persantage = Math.round((step / allQuestions) * 100)

  return (
    <div className={css.quizWrapper}>
      <div className={css.progress}>
       <div style={{width: `${persantage}%`}}  className={css.pesentage}></div>
      </div>
      <h2 className={css.quizTitle}>{question.title}</h2>
      <ul className={css.quizList}>
       {question.variants.map(ask => (
        <li key={ask} onClick={onClick} className={css.quizItem}>{ask}</li>
       ))}
      </ul>
    </div>
  );
};
