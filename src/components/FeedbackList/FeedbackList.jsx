import React from "react";
import css from './FeedbackList.module.css'

export const FeedbackList = ({title, children})=> {
  return (
    <div className={css.wrapperFeedbackList}>
        <h2 className={css.FeedbackListTitle}>{title}</h2>
        <ul className={css.FeedbackList}>
        {children}
        </ul>
        
    </div>
  )
}