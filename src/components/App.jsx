import React from "react";
import { Counter } from "./Counter/Counter";
import { Controle } from "./Controle/Controle";
import css from './App.module.css'

export const App = () => {

const [count, setCount] = React.useState(0)

function onAddClick () {
  setCount(count + 1)
}

function onSubstactClick () {
  setCount(count + 1)
}

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     <Counter count={count} />
     <div className={css.controlerWrapper}>
      <Controle action='Віднімаємо -1' onClick={onAddClick} />
      <Controle action='Додаємо +1' onClick={onSubstactClick} />
     </div>
    </div>
  );
};
