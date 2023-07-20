import css from './Modal.module.css'

export const Modal = ({onClick , children}) => {
  return (
    <div className={css.backDrop} >
      <div className={css.modal}>
        <button className={css.closeBtn}  onClick={onClick} >x</button>
        <div className={css.iconWraper}><img className={css.iconWraper} src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000' /></div>
      </div>
    </div>
  )
}