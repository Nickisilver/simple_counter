import React, { Component } from "react";
import { FeedbackList } from "./FeedbackList/FeedbackList";
import { FeedbackListItem } from "./FeedbackListItem/FeedbackListItem";
import { Statistic } from "./Statistic/Statistic";
import css from './App.module.css'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onBtnClick = (e) => {
    const btn = e.target.name
   
    this.setState(prevState => ({[btn]: prevState[btn] + 1}))
    
  }

  totalPoint = () => {
    const {good, neutral, bad} = this.state
    return  good + bad + neutral
  }
  positiveRequest = () => {
    const {good} = this.state
    const total = this.totalPoint()
    const positive = Math.round((good / total) * 100);
    return total ? positive : 0
  }

  render(){
    const btnNames = Object.keys(this.state)
    const {good, neutral, bad} = this.state

    return (
      <div className={css.wrapper}>
        <FeedbackList title='Leave your feedback '>
          <FeedbackListItem names={btnNames}  onBtnClick={this.onBtnClick} />
        </FeedbackList>
        <Statistic good={good} neutral={neutral} bad={bad} total={this.totalPoint()} positiveRequest={this.positiveRequest()} />
      </div>
    )
  }
}