import css from './BtnOpener.module.css'


export const BtnOpener = ({action, onClick, }) => {

  return (
    <button className={css.button} type='button' onClick={onClick}>{action}</button>
  )
}