import React, { useState } from "react";
import { Link } from "react-router-dom";
import likeAcktive from "../../assets/Like-active.svg";
import like from "../../assets/like.svg";

function User(props) {
  const [liked, setLike] = useState(false);
  function localLike() {
    setLike(!liked);
    localStorage.setItem(`${props.id}`, liked);
  }

  return (
    <>
      <div className="member">
        <Link
          to="/member"
          id={props.id}
          title={props.title}
          state={{ id: props.id }}
        >
          <img className="avatar" src={props.image} alt="team member photo" />
          <p>{props.name}</p>
        </Link>
        <img
          id="like"
          src={
            localStorage.getItem(`${props.id}`) === "true" ? likeAcktive : like
          }
          className="like"
          onClick={() => localLike()}
        />
      </div>
    </>
  );
}

export default User;
