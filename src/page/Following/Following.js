import axios from "axios";
import { useEffect, useState } from "react";
export var userlogin;
function Following() {
  // const [data, setdata] = useState("");
  // useEffect(() => {
  //   const a = async () => {
  //     try {
  //       const res = await axios.get(
  //         "http://192.168.102.230/TIKTOK_API/public/api/videos",
  //         {
  //           params: {
  //             page: 1,
  //           },
  //         }
  //       );
  //       setdata(res.data.data);
  //     } catch (er) {
  //       console.log(er);
  //     }
  //   };
  //   a();
  // }, []);
  // console.log(data);

  const [post, setpost] = useState("");

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

  if (post.length > 0) {
    userlogin = post[0];
  }
  console.log(userlogin);
  return <h1>FOLLOWING PAGE</h1>;
}
export default Following;
