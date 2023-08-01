import React from 'react';
import css from './UserList.module.css';

export const UserList = ({ items, filter, onBtnAdd, onClick, invites, isInvited }) => {
  return (
    <>
      {' '}
      <ul>
        {items
          .filter(
            item =>
              item.first_name.toLowerCase().includes(filter.toLowerCase()) ||
              item.last ||
              item.email.toLowerCase().includes(filter.toLowerCase())
          )
          .map((item, index) => (
            <li key={item.id}>
              <div className={css.userWrapper}>
                <div className={css.imgWrapper}>
                  <img src={item.avatar} />
                </div>
                <div className={css.infoUser}>
                  <p className={css.name}>
                    {item.first_name} {item.last_name}
                  </p>
                  <p className={css.email}>@{item.email}</p>
                <button id={item.id} type="button"  onClick={()=>onClick(item.id)}>{invites.includes(item.id) ? '-' : '+'}</button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};
