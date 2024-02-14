import React from "react";
import "../../styles/header.css";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slice/userSlice";
import { Link } from "react-router-dom";
import { useResize } from "../hooks/use-resize";
import exit from '../../assets/exit.svg'

function Header(props) {
  const dispatch = useDispatch();
  const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();
  return (
    <div className="header">
      <Link to="/" className="button-link">
        {isScreenMd ?
          <button onClick={() => dispatch(removeUser())} className="button">
            Выход
          </button>: <img src={exit}/>
        }
      </Link>
      <h1 className="title">Наша команда</h1>
      <h2 className="sup-title">
        Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
        ложатся на их плечи, и умеющие находить выход из любых, даже самых
        сложных ситуаций.{" "}
      </h2>
    </div>
  );
}

export default Header;
