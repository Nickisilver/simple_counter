import css from './EndGame.module.css'
// import dog from '../../icon/dog.jpg'
export const EndGame = ({reset, count}) => {

 
  
    return (
      <div className={css.quizWrapper}>
      <h2 className={css.resetTitle}>You answerd {count} questions</h2>
       <div className={css.img}>🧑‍💻</div>
       <button type="button" className={css.btnReset} onClick={reset}>Do you wonna play again?</button>
      </div>
    );
  };
  