import "./style.scss";
import { v4 as uuidv4 } from "uuid";
import Button from "../../assets/button";
import Input from "../../assets/input";
import { CheckEmail } from "../../assets/emailCheck";
import React, { memo, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { IPHTTP } from "~/utils/httprequest";

function RigisterUser({ userShow, onUserShow }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [nickName, setNickName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [listAcount, setListAcount] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isEmty, setIsEmty] = useState(false);
  const [isEmtyPass, setIsEmtyPass] = useState(false);
  const [isEmtyName, setIsEmtyName] = useState(false);
  const [isEmtyNickName, setIsEmtyNickName] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormSucssec, setIsFormSucssec] = useState(false);
  const resetForm = () => {
    setAvatar("");
    setIsError(false);
    setIsEmty(false);
    setIsEmtyPass(false);
    setIsEmtyName(false);
    setIsEmtyNickName(false);
  };

  const handleSubmit = () => {
    if (!email || !userName || !passWord || !nickName || isError) {
      setIsFormSubmitted(true);
      setIsFormSucssec(false);
      return;
    }

    const newList = [
      ...listAcount,
      {
        id: uuidv4(),
        name: userName,
        email: email,
        password: passWord,
        nickName: nickName,
        avatar: avatar,
      },
    ];
    setListAcount(newList);
    setIsFormSubmitted(false);
    setIsFormSucssec(true);
    resetForm();
  };
  useEffect(() => {
    if (!userName) {
      setIsEmtyName(true);
      return;
    } else {
      setIsEmtyName(false);
    }
  }, [userName]);

  useEffect(() => {
    if (!passWord) {
      return setIsEmtyPass(true);
    } else {
      return setIsEmtyPass(false);
    }
  }, [passWord]);

  useEffect(() => {
    if (!nickName) {
      return setIsEmtyNickName(true);
    } else {
      return setIsEmtyNickName(false);
    }
  }, [nickName]);
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
  console.log(listAcount);
  return (
    <div className={userShow ? "rigisterUser" : "rigisterUserNone"}>
      <div className="rigisterUser_Main">
        <div className="rigisterUser_Main-delete">
          <span onClick={onUserShow}>
            <FontAwesomeIcon icon={faX} />
          </span>
        </div>
        <div className="rigisterUser_Main-title">
          <h2>Đăng ký</h2>
          {isFormSubmitted ? (
            <h3 className="isFormValid">Đăng ký không thành công</h3>
          ) : (
            ""
          )}
          {isFormSucssec ? (
            <h3 className="isFormSuccess">Đăng ký thành công</h3>
          ) : (
            ""
          )}
        </div>
        <form
          method="post"
          action={`${IPHTTP}TIKTOK_API/public/api/users/register`}
          encType="multipart/form-data"
        >
          <Input
            label="Name: "
            placeholder="Nhập tên tài khoản"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            isEmtyName={isEmtyName ? "Vui lòng nhập tên " : ""}
            name="name"
          />
          <Input
            label="Email: "
            placeholder="Nhập email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isError={isError ? "Vui lòng nhập đúng định dạng " : ""}
            isEmty={isEmty ? "Vui lòng nhập email" : ""}
            name="email"
          />
          <Input
            label="PassWord: "
            placeholder="Nhập passWord"
            type="text"
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
            isEmtyPass={isEmtyPass ? "Vui lòng nhập PassWord" : ""}
            name="password"
          />
          <Input
            label="NickName: "
            placeholder="Nhap nickName"
            type="text"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            isEmtyNickName={isEmtyNickName ? "Vui lòng nhập nickName" : ""}
            name="nickname"
          />
          <Input type="file" label="Avatar: " name={"avatar"} />
          <div className="rigisterUser_Main-submit">
            <Button name="Submit" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
}
export default memo(RigisterUser);
