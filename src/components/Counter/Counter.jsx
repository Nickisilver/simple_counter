import css from './Counter.module.css'

export const Counter = ({count}) => {
  return (
    <h2 className={`${css.Title} ${css.animateCharcter}`}>{count}</h2>
  )
}