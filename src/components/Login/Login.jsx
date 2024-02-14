import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { setUser } from "../../store/slice/userSlice";
import ErrorModal from "../ErrorModal/ErrorModal";
import { useState } from "react";
import warn from "../../assets/warning.png";

const Login = () => {
  const dispatch = useDispatch();
  const { push } = useNavigate();
  const [modalActive, setModalActive] = useState(false);

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        push("/home");
      })
      .catch(() => setModalActive(true));
  };

  return (
    <>
      <Form title="Войти" handleClick={handleLogin} />
      <ErrorModal active={modalActive} setActive={setModalActive}>
        <img src={warn} className="hand" />
        <h1 className="h1">Проверьте почту или пароль</h1>
        <img src={warn} className="hand-2" />
      </ErrorModal>
    </>
  );
};

export { Login };
