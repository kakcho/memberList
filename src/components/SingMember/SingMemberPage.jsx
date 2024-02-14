import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../../styles/member.css";
import { removeUser } from "../../store/slice/userSlice";
import PHONEICON from "../../assets/phoneIcon.svg";
import EMAILICON from "../../assets/email.svg";
import back from "../../assets/back.svg";
import { useResize } from "../hooks/use-resize";
import exit from "../../assets/exit.svg";

function SingMemberPage(props) {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = location.state;

  const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();

  const [member, setMember] = useState([]);
  const f = async () => {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const json = await res.json();
    setMember(json.data);
  };
  useEffect(() => {
    f();
  }, []);
  return (
    <>
      <div className="member-header">
        <Link to="/home" className="button-link-back-member">
          {isScreenMd ? (
            <button onClick={() => dispatch(removeUser())} className="button">
              Назад
            </button>
          ) : (
            <img src={back} />
          )}
        </Link>

        <div className="name">
          <h1 className="h1-member">{member.first_name}</h1>
          <h2 className="h2-member">Партнер</h2>
        </div>
        <img
          src={member.avatar}
          alt="member-avatar"
          className="member-avatar"
        />
        <Link to="/" className="button-link-member">
          {isScreenMd ? (
            <button onClick={() => dispatch(removeUser())} className="button">
              Выход
            </button>
          ) : (
            <img src={exit} />
          )}
        </Link>
      </div>

      <div className="main">
        <div className="contact">
          <div className="phone">
            <img src={PHONEICON} alt="телефон" />
            +7 (954) 333-44-55
          </div>
          <div className="email">
            <img src={EMAILICON} alt="почта" />
            {member.email}
          </div>
        </div>
        <p className="member-title">
          Клиенты видят в нем эксперта по вопросам разработки комплексных
          решений финансовых продуктов, включая такие аспекты, как
          организационная структура, процессы, аналитика и ИТ-компоненты. Он
          помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать
          процессы за счет применения новейших технологий и увеличивать продажи,
          используя самые современные аналитические инструменты.
          <br />
          <br />
          В работе с клиентами недостаточно просто решить конкретную проблему
          или помочь справиться с трудностями. Не менее важно уделять внимание
          обмену знаниями: "Один из самых позитивных моментов — это осознание
          того, что ты помог клиенту перейти на совершенно новый уровень
          компетентности, уверенность в том, что после окончания проекта у
          клиента есть все необходимое, чтобы дальше развиваться
          самостоятельно".
          <br />
          <br />
          Помимо разнообразных проектов для клиентов финансового сектора, Сорин
          ведет активную предпринимательскую деятельность. Он является
          совладельцем сети клиник эстетической медицины в Швейцарии,
          предлагающей инновационный подход к красоте, а также инвестором других
          бизнес-проектов.
        </p>
      </div>
    </>
  );
}

export default SingMemberPage;
