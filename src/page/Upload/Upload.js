import classNames from "classnames/bind";
import images from "~/access/image";
import { Wrapper } from "~/conponents/popper";
import Videobtnactive from "~/conponents/Videobtnactive";
import styles from "./Upload.module.scss";
import Image from "~/conponents/Image";
import { text } from "@fortawesome/fontawesome-svg-core";
import VideoTag from "~/conponents/VideoTag";
import Button from "~/conponents/Button";
import { AcountLogin } from "../LoginRegister/logIn/LogInItem";
import { IPHTTP } from "~/utils/httprequest";
import { useRef, useState } from "react";
const cx = classNames.bind(styles);
function Upload() {
  const Data = {
    like_count: 6,
    comment_count: 12,
    favourite_count: 12,
    share_count: 12,
  };
  const [ifofile, setifofile] = useState("");

  const as = (e) => {
    setifofile(e.target.files[0]);
  };
  // console.log(inpuref.curre/nt.files[0]);
  console.log(ifofile.name);
  return (
    <form
      method="POST"
      action={`${IPHTTP}TIKTOK_API/public/api/videos/create`}
      encType="multipart/form-data"
    >
      <div className={cx("Upload")}>
        <div className={cx("wrapper")}>
          <div className={cx("title")}>
            <h1>Tải video lên</h1>
            <span>Đăng video vào tài khoản của bạn</span>
          </div>

          <div className={cx("content")}>
            <div className={cx("file")}>
              <div
                className={cx("phone")}
                style={{ backgroundImage: `url(${images.phone})` }}
              >
                <div className={cx("video")}>
                  {" "}
                  <VideoTag
                    muted
                    src={ifofile && window.URL.createObjectURL(ifofile)}
                  />
                </div>
                <div className={cx("avartar")}>
                  <Image src={AcountLogin && IPHTTP + AcountLogin.avatar} />
                </div>
                <div className={cx("Activevideo")}>
                  <Videobtnactive data={Data} />
                </div>
                <div className={cx("contrl")}>
                  <img src={images.controlphone}></img>
                </div>
              </div>
              <Wrapper>
                <div className={cx("selectvideo")}>
                  <p className={cx("Namefile")}>{ifofile && ifofile.name}</p>
                  <input type="file" name="file_url" onChange={as} />
                </div>
              </Wrapper>
            </div>
            <div className={cx("Description")}>
              <div className={cx("Mota")}>
                <p className={cx("Title")}>
                  <span className={cx("dau")}>Chú thích</span>
                  <span>
                    <span>0</span>/<span>200</span>
                  </span>
                </p>
                <div className={cx("nhap")}>
                  <input
                    type="text"
                    name="description"
                    placeholder="Mô tả video"
                  />
                </div>
                <div className={cx("nhap")}>
                  <input
                    type="text"
                    name="music"
                    placeholder="Tên bài hát"
                    defaultValue={`nhạc nền - ${AcountLogin.name}`}
                  />
                </div>
              </div>
              <div className={cx("Chedo")}>
                <p className={cx("dau")}>Ai có thể xem video này</p>
                <select>
                  <option>Cồng khai</option>
                  <option>Bạn bè</option>
                  <option>Riêng tư</option>
                </select>
              </div>
              <div className={cx("Chophep")}>
                <p className={cx("dau")}> Cho phép người dùng:</p>
                <span>
                  <input
                    type="checkbox"
                    defaultChecked
                    className={cx("checkbox")}
                  ></input>
                  <span> Bình luận</span>
                </span>
                <span>
                  <input
                    type="checkbox"
                    defaultChecked
                    className={cx("checkbox")}
                  ></input>
                  <span>Duet</span>
                </span>
                <span>
                  <input
                    type="checkbox"
                    defaultChecked
                    className={cx("checkbox")}
                  ></input>
                  <span>Ghép nối</span>
                </span>
              </div>
              <div className={cx("footer")}>
                <div>
                  <span className={cx("dau")}>Lên lịch cho video</span>
                  <input type="checkbox" className={cx("checkbox")}></input>
                </div>
                <div>
                  <span className={cx("dau")}>Khai báo nội dung bài đăng</span>
                  <input type="checkbox" className={cx("checkbox")}></input>
                </div>
                <div>
                  <span className={cx("dau")}>
                    Chạy quy trình kiểm tra bản quyền
                  </span>
                  <input type="checkbox" className={cx("checkbox")}></input>
                </div>
              </div>
              <p className={cx("cuoi")}>
                Chúng tôi sẽ kiểm tra xem video của bạn có sử dụng âm thanh vi
                phạm bản quyền hay không. Nếu chúng tôi phát hiện có vi phạm,
                bạn có thể chỉnh sửa video trước khi đăng
              </p>
              <div className={cx("dang")}>
                <Button to={"/"}>Hủy bỏ</Button>
                <input className={cx("submit")} type="submit" value="Đăng" />
              </div>
              <input
                className={cx("us")}
                type={"hidden"}
                readOnly
                name="user_id"
                value={AcountLogin && AcountLogin.id}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
export default Upload;
