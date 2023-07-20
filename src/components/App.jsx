import React from "react";
import { BtnOpener } from "./BtnOpener/BtnOpener";
import { Modal } from "./Modal/Modal";
import css from './App.module.css'

export const App = () => {

const [visible, setViseble] = React.useState(false)


function onBtnClick () {
  setViseble(!visible)
}
  return (
    <div className={css.wrapper}>
     {!visible &&  <BtnOpener onClick={onBtnClick} action='✨ Click to open Modal window' />}
      {visible && <Modal onClick={onBtnClick}  visible={visible} />}
    </div>
  );
};
