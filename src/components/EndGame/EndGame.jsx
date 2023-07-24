import css from './EndGame.module.css'
// import dog from '../../icon/dog.jpg'
export const EndGame = ({reset}) => {

 
  
    return (
      <div className={css.quizWrapper}>
       <div className={css.img}>🧑‍💻</div>
       <button type="button" className={css.btnReset} onClick={reset}>Do you wonna play again?</button>
      </div>
    );
  };
  