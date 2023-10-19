import "./style.scss";
import Button from "../../assets/button";
import Input from "../../assets/input";
import React, { useState, useEffect } from "react";
import { CheckEmail } from "../../assets/emailCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
export default function LogInItem({ onUserShow, userShow }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isEmty, setIsEmty] = useState(false);
  const [isEmtyPass, setIsEmtyPass] = useState(false);
  const [senbtn, setsenbtn] = useState(false);
  const [post, setpost] = useState("jhbhj");
  useEffect(() => {
    if (!email) {
      return setIsEmty(true);
    } else {
      return setIsEmty(false);
    }
  }, [email]);
  useEffect(() => {
    if (email) {
      const ischeckEmail = CheckEmail(email);
      if (!ischeckEmail) {
        setIsError(true);
        return;
      } else {
        setIsError(false);
      }
    }
  }, [email]);
  useEffect(() => {
    if (!password) {
      return setIsEmtyPass(true);
    } else {
      return setIsEmtyPass(false);
    }
  }, [password]);

  useEffect(() => {
    const b = async () => {
      try {
        const resuilt = await axios.post(
          "http://192.168.102.230/TIKTOK_API/public/api/users/login?email=thaiq9577@gmail.com&password=1234567"
        );
        setpost(resuilt.data);
      } catch (err) {
        console.log(err);
      }
    };
    b();
  }, []);
  console.log(post);
  const handleLogIn = () => {
    // setsenbtn(true);
  };

  return (
    <div className={userShow ? "logInUser" : "logInUserNone"}>
      <div className="logInUser_wrapper">
        <div className="logInUser_wrapper-body">
          <h2>Đăng nhập</h2>
          <form>
            <Input
              label="Email: "
              placeholder="Nhập email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isError={isError ? "Vui lòng nhập đúng định dạng " : ""}
              isEmty={isEmty ? "Vui lòng nhập email" : ""}
            />
            <Input
              label="PassWord: "
              placeholder="Nhập passWord"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isEmtyPass={isEmtyPass ? "Vui lòng nhập PassWord" : ""}
            />
          </form>
          <div className="logInUser_wrapper-footer">
            <Button name="Log In" onClick={handleLogIn} />
          </div>
        </div>
        <div className="logInUser_wrapper-head">
          <span onClick={onUserShow}>
            <FontAwesomeIcon icon={faX} />
          </span>
        </div>
      </div>
    </div>
  );
}
