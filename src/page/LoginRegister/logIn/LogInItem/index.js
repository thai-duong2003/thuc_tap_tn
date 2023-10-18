import "./style.scss";
import Button from "../../assets/button";
import Input from "../../assets/input";
import React, { useState, useEffect } from "react";
import { CheckEmail } from "../../assets/emailCheck";

export default function LogInItem({ onUserShow, userShow }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isEmty, setIsEmty] = useState(false);
  const [isEmtyPass, setIsEmtyPass] = useState(false);

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
  const handleLogIn = () => {};
  return (
    <div className={userShow ? "logInUser" : "logInUserNone"}>
      <div className="logInUser_wrapper">
        <div className="logInUser_wrapper-head">
          <span onClick={onUserShow}>
            <i class="fa-solid fa-x"></i>
          </span>
        </div>
        <div className="logInUser_wrapper-body">
          <h2>Đăng nhập</h2>
          <form action="">
            <Input
              label="Email: "
              placeholder="Nhập email"
              type="text"
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
        </div>
        <div className="logInUser_wrapper-footer">
          <Button name="Log In" onClick={handleLogIn} />
        </div>
      </div>
    </div>
  );
}
