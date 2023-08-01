import React from "react";
import css from './Result.module.css'

export const Result = ({onClick, numberFriends}) => {
  return (
    <div className={css.resultWrapper}>
      <h2>You add {numberFriends} new friends</h2>
      <div><button type="button" onClick={onClick}>Return</button></div>
    </div>
  )
}