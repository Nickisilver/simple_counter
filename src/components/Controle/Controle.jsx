import css from './Controle.module.css'

export const Controle = ({action, onClick}) => {
  return (
    <button className={`${css.Btn} ${css.animateCharcter}`} type="button" onClick={onClick}>{action}</button>
  )
}