import React, { useState } from 'react';
import { Filter } from './Filter/Filter';
import { UserList } from './UserList/UserList';
import { Result } from './Result/Result';
import css from './App.module.css';

export const App = () => {
  const [users, setUsers] = React.useState([]);
  const [invites, setInvites] = useState([]);
  const [btnAdd, setBtnAdd] = useState(true);
  const [btnSend, setBtnSend] = useState(true);

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(users => setUsers(users.data))
      .catch(err => {
        console.warn(err);
        alert('Помилка при отриманні користувачів!');
      });
  }, []);

  const [filter, setFilter] = React.useState('');
  function onInputChange(e) {
    setFilter(e.target.value);
  }

  function onBtnSend() {
    setBtnSend(!btnSend);
  }

  function onBtnAdd(id) {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id));
    } else {
      setInvites(prev => [...prev, id]);
    }
  }

  function isInvited(e){
    return invites.includes(e)
  }
  console.log(invites);
  return (
    <div>
      {btnSend ? (
        <>
          <Filter query={filter} onInputChange={onInputChange} />
          <UserList
            items={users}
            filter={filter}
            onClick={onBtnAdd}
            invites={invites}
            isInvited={isInvited}
          />
          <button type="button" onClick={onBtnSend}>
            Відправити запрошення
          </button>
        </>
      ) : (
        <Result onClick={onBtnSend} numberFriends={invites.length} />
      )}
    </div>
  );
};
