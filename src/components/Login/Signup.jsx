import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { setUser } from "../../store/slice/userSlice";
import { useState } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";
import warn from "../../assets/warning.png";
import '../../styles/error.css'

const SignUp = () => {
  const dispatch = useDispatch();
  const push = useNavigate();
  const [modalActive, setModalActive] = useState(false);

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      <Form title="Зарегистрироваться" handleClick={handleRegister} />
      <ErrorModal active={modalActive} setActive={setModalActive}>
        <img src={warn} className="hand" />
        <h1 className="h1">Укажите корректные данные</h1>
        <img src={warn} className="hand-2" />
      </ErrorModal>
    </>
  );
};

export { SignUp };
