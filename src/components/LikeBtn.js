import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Like() {
  const uri = "https://porfolio-backend.vercel.app/likes/getLikes";
  const postUri = "https://porfolio-backend.vercel.app/likes/updateLikes";

  const [numLike, updateLike] = useState(0);
  const [likeCounter, upadteCounter] = useState(0);
  const [btnState, upadteBtn] = useState(true);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        updateLike(res.data.data);
        upadteBtn(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function clickHandler() {
    updateLike(numLike + 1);
    upadteCounter(likeCounter + 1);

    if (likeCounter > 8) {
      upadteBtn(true);
    }

    axios
      .post(postUri, { likes: numLike })
      .then((res) => {
        console.log(res.data.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Nav.Item className="like-item">
      <Button className="like-btn" onClick={clickHandler} disabled={btnState}>
        <i className="far fa-heart" style={{ color: "#fb6fcd" }}></i> {numLike}
      </Button>
    </Nav.Item>
  );
}

export default Like;
