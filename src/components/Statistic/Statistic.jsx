import React from "react";
import css from './Statistic.module.css'

export const Statistic = ({ good, neutral, bad, total, positiveRequest}) => {
  return (
    <div className={css.statisticWrapper}>
      <h2 className={css.statisticTilte}>Statistic</h2>
      <div>
        <span>Good</span>: <span>{good}</span>
      </div>
      <div>
        <span>Neutral</span>: <span>{neutral}</span>
      </div>
      <div>
        <span>Bad</span>: <span>{bad}</span>
      </div>
      <div>
        <span>Total</span>: <span>{total}</span>
      </div>
      <div>
        <span>Good request</span>: {positiveRequest}%<span></span>
      </div>
    </div>
  )
}