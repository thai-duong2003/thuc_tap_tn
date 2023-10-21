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
const cx = classNames.bind(styles);
function Upload() {
  const Data = {
    like_count: 6,
    comment_count: 12,
    favourite_count: 12,
    share_count: 12,
  };
  return (
    <div className={cx("Upload")}>
      <form method="post" action="">
        <div className={cx("wrapper")}>
          <div className={cx("title")}>
            <h1>Tải video lên</h1>
            <p>Đăng video vào tài khoản của bạn</p>
          </div>

          <div className={cx("content")}>
            <div className={cx("file")}>
              <div
                className={cx("phone")}
                style={{ backgroundImage: `url(${images.phone})` }}
              >
                <div className={cx("video")}>
                  {" "}
                  <VideoTag muted src={images.video2} />
                </div>
                <div className={cx("avartar")}>
                  <Image src={images.noImg} />
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
                  <p className={cx("Namefile")}>download4.mp4</p>
                  <input type="file" />
                </div>
              </Wrapper>
            </div>
            <div className={cx("Description")}>
              <div className={cx("Mota")}>
                <p className={cx("Title")}>
                  <p>Chú thích</p>
                  <p>
                    <span>0</span>/<span>200</span>
                  </p>
                </p>
                <div className={cx("nhap")}>
                  <input type={text} placeholder="Mô tả video" />
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
                  <input type="checkbox" className={cx("checkbox")}></input>
                  <span> Bình luận</span>
                </span>
                <span>
                  <input type="checkbox" className={cx("checkbox")}></input>
                  <span>Duet</span>
                </span>
                <span>
                  <input type="checkbox" className={cx("checkbox")}></input>
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
                <input className={cx("submit")} type="submit" value={"Đăng"} />
              </div>
              <input
                className={cx("us")}
                type={text}
                value={AcountLogin && AcountLogin.id}
              ></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Upload;
