import React from 'react';
import css from './FeedbackListItem.module.css';

export const FeedbackListItem = ({ names, onBtnClick }) => {
  return names.map(name => {
    return (
      <li key={name}>
        <button type="button" name={name} onClick={onBtnClick}>
          {name}
        </button>
      </li>
    );
  });
};
