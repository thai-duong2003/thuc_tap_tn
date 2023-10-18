import { useState } from "react";
import Rigister from "./rigister";
import LogIn from "./logIn";
function LoginRegister() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  console.log("====", show);
  return (
    <div>
      {show ? <Rigister onShow={handleShow} /> : <LogIn onshow={handleShow} />}
    </div>
  );
}
export default LoginRegister;
