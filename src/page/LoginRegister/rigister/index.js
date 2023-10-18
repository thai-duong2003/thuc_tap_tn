import "./style.scss";
import { useState } from "react"
import RigisterUser from "./rigisterUser"
function Rigister({ onShow }) {
  const [userShow, setUserShow] = useState(false)
  const handlShowUser = () => {
    if (userShow) {
      setUserShow(false)
    } else {
      setUserShow(true)
    }
  }
  return (
    <div>
      <div className={!userShow ? "rigisters" : "showNone"}>
        <div className="rigister-main">
          <div className="rigister-main-delete">
            <div className="rigister-main-delete-icon">
              <i class="fa-solid fa-x"></i>
            </div>
          </div>
          <div className="rigister_title">
            <h2>
              Sign up for TikTok
            </h2>
          </div>
          <div className="rigisters_body">
            <div className="rigisblock rigisters_body-user" onClick={handlShowUser}>
              <svg
                width="1.2em"
                data-e2e=""
                height="1.2em"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.0003 7C20.1343 7 17.0003 10.134 17.0003 14C17.0003 17.866 20.1343 21 24.0003 21C27.8663 21 31.0003 17.866 31.0003 14C31.0003 10.134 27.8663 7 24.0003 7ZM13.0003 14C13.0003 7.92487 17.9252 3 24.0003 3C30.0755 3 35.0003 7.92487 35.0003 14C35.0003 20.0751 30.0755 25 24.0003 25C17.9252 25 13.0003 20.0751 13.0003 14ZM24.0003 33C18.0615 33 13.0493 36.9841 11.4972 42.4262C11.3457 42.9573 10.8217 43.3088 10.2804 43.1989L8.32038 42.8011C7.77914 42.6912 7.4266 42.1618 7.5683 41.628C9.49821 34.358 16.1215 29 24.0003 29C31.8792 29 38.5025 34.358 40.4324 41.628C40.5741 42.1618 40.2215 42.6912 39.6803 42.8011L37.7203 43.1989C37.179 43.3088 36.6549 42.9573 36.5035 42.4262C34.9514 36.9841 29.9391 33 24.0003 33Z"
                ></path>
              </svg>
              <p>User phone or email</p>
            </div>
            <div className="rigisblock rigisters_body-fb">
              <svg
                width="1.2em"
                data-e2e=""
                height="1.2em"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z"
                  fill="white"
                ></path>
                <path
                  d="M24 1C11.2964 1 1 11.2964 1 24C1 35.4775 9.40298 44.9804 20.3846 46.7205L20.3936 30.6629H14.5151V24.009H20.3936C20.3936 24.009 20.3665 20.2223 20.3936 18.5363C20.4206 16.8503 20.7542 15.2274 21.6288 13.7487C22.9722 11.4586 25.0639 10.3407 27.6335 10.0251C29.7432 9.76362 31.826 10.0521 33.9087 10.3407C34.0529 10.3587 34.125 10.3767 34.2693 10.4038C34.2693 10.4038 34.2783 10.6472 34.2693 10.8005C34.2603 12.4053 34.2693 16.0839 34.2693 16.0839C33.2685 16.0659 31.6096 15.9667 30.5096 16.138C28.6884 16.4175 27.6425 17.5806 27.6064 19.4108C27.5704 20.8354 27.5884 24.009 27.5884 24.009H33.9988L32.962 30.6629H27.5974V46.7205C38.597 44.9984 47.009 35.4775 47.009 24C47 11.2964 36.7036 1 24 1Z"
                  fill="#0075FA"
                ></path>
              </svg>
              <p>
                Continue with Facebook
              </p>
            </div>
            <div className="rigisblock rigisters_body-google">
              <svg
                width="1.2em"
                data-e2e=""
                height="1.2em"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M43 24.4313C43 23.084 42.8767 21.7885 42.6475 20.5449H24.3877V27.8945H34.8219C34.3724 30.2695 33.0065 32.2818 30.9532 33.6291V38.3964H37.2189C40.885 35.0886 43 30.2177 43 24.4313Z"
                  fill="#4285F4"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.3872 43.001C29.6219 43.001 34.0107 41.2996 37.2184 38.3978L30.9527 33.6305C29.2165 34.7705 26.9958 35.4441 24.3872 35.4441C19.3375 35.4441 15.0633 32.1018 13.5388 27.6108H7.06152V32.5337C10.2517 38.7433 16.8082 43.001 24.3872 43.001Z"
                  fill="#34A853"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.5395 27.6094C13.1516 26.4695 12.9313 25.2517 12.9313 23.9994C12.9313 22.7472 13.1516 21.5295 13.5395 20.3894V15.4668H7.06217C5.74911 18.0318 5 20.9336 5 23.9994C5 27.0654 5.74911 29.9673 7.06217 32.5323L13.5395 27.6094Z"
                  fill="#FBBC04"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.3872 12.5568C27.2336 12.5568 29.7894 13.5155 31.7987 15.3982L37.3595 9.94866C34.0018 6.88281 29.6131 5 24.3872 5C16.8082 5 10.2517 9.25777 7.06152 15.4674L13.5388 20.39C15.0633 15.8991 19.3375 12.5568 24.3872 12.5568Z"
                  fill="#EA4335"
                ></path>
              </svg>
              <p>Continue with Google</p>
            </div>
            <div className="rigisblock rigisters_body-twitter">
              <svg
                width="1.2em"
                data-e2e=""
                height="1.2em"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M43.8044 6.79902C42.5841 7.62363 39.7822 8.82191 38.4004 8.82191V8.82437C36.8226 7.08554 34.6013 6 32.1377 6C27.353 6 23.4731 10.093 23.4731 15.1387C23.4731 15.8398 23.5501 16.5236 23.6925 17.1793H23.6911C17.2007 16.9996 10.1022 13.5678 5.82893 7.69403C3.2016 12.4916 5.4752 17.8272 8.45673 19.7713C7.43613 19.8526 5.55733 19.6473 4.673 18.737C4.61373 21.9212 6.06507 26.1403 11.3571 27.6709C10.3379 28.2494 8.53373 28.0834 7.74926 27.9604C8.0246 30.6484 11.5927 34.1625 15.4945 34.1625C14.1039 35.8594 8.8716 38.9374 3 37.9582C6.98767 40.5177 11.6352 42 16.5543 42C30.5333 42 41.3894 30.0482 40.8051 15.3041C40.8028 15.2879 40.8028 15.2716 40.8014 15.2539C40.8028 15.216 40.8051 15.1781 40.8051 15.1387C40.8051 15.0929 40.8014 15.0496 40.8 15.0053C42.0726 14.0871 43.7801 12.463 45 10.3254C44.2925 10.7365 42.1701 11.5596 40.1952 11.7639C41.4627 11.0422 43.3405 8.67865 43.8044 6.79902Z"
                  fill="#1DA1F2"
                ></path>
              </svg>
              <p>
                Continue with Twitter
              </p>
            </div>
            <div className="rigisblock rigisters_body-line">
              <svg
                width="1.2em"
                data-e2e=""
                height="1.2em"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 47.001C36.7026 47.001 47 36.7035 47 24.001C47 11.2984 36.7026 1.00098 24 1.00098C11.2975 1.00098 1 11.2984 1 24.001C1 36.7035 11.2975 47.001 24 47.001Z"
                  fill="#00B900"
                ></path>
                <path
                  d="M40.0001 22.4324C40.0001 15.2729 32.8228 9.44822 23.9999 9.44822C15.1782 9.44822 8 15.2729 8 22.4324C8 28.8509 13.6922 34.2263 21.3811 35.2427C21.9022 35.355 22.6114 35.5863 22.7908 36.0316C22.9522 36.4362 22.8963 37.0699 22.8423 37.4784C22.8423 37.4784 22.6546 38.6075 22.6141 38.848C22.5445 39.2525 22.2927 40.43 23.9999 39.7105C25.7078 38.9909 33.2145 34.2848 36.5713 30.421H36.5707C38.8895 27.8783 40.0001 25.2978 40.0001 22.4324Z"
                  fill="white"
                ></path>
                <path
                  d="M20.7494 18.9727H19.6271C19.4551 18.9727 19.3152 19.1123 19.3152 19.2837V26.2556C19.3152 26.4273 19.4551 26.5666 19.6271 26.5666H20.7494C20.9215 26.5666 21.0611 26.4273 21.0611 26.2556V19.2837C21.0611 19.1123 20.9215 18.9727 20.7494 18.9727Z"
                  fill="#00B900"
                ></path>
                <path
                  d="M28.4738 18.9727H27.3515C27.1794 18.9727 27.0399 19.1123 27.0399 19.2837V23.4257L23.845 19.1111C23.8377 19.1 23.8294 19.0896 23.8208 19.0795L23.8187 19.0776C23.8125 19.0706 23.8064 19.0644 23.7999 19.0583C23.7981 19.0565 23.7963 19.0549 23.7941 19.0531C23.7889 19.0482 23.7834 19.0436 23.7776 19.0393C23.7751 19.0368 23.7723 19.035 23.7696 19.0328C23.7641 19.0292 23.7588 19.0252 23.7533 19.0218C23.7503 19.0197 23.7472 19.0178 23.7438 19.0163C23.7383 19.0129 23.7328 19.0095 23.7272 19.0068C23.7239 19.0052 23.7208 19.0034 23.7174 19.0022C23.7116 18.9994 23.7058 18.9967 23.6996 18.9945C23.696 18.9933 23.6929 18.9921 23.6895 18.9908C23.6834 18.9887 23.6773 18.9865 23.6708 18.985C23.6674 18.9838 23.6638 18.9832 23.6601 18.9819C23.6539 18.9807 23.6481 18.9792 23.6423 18.9779C23.638 18.9773 23.6334 18.9767 23.6291 18.9764C23.6236 18.9752 23.6181 18.9749 23.6125 18.9743C23.6073 18.9737 23.6021 18.9737 23.5966 18.9733C23.5926 18.9733 23.5895 18.9727 23.5855 18.9727H22.4635C22.2915 18.9727 22.1516 19.1123 22.1516 19.2837V26.2556C22.1516 26.4273 22.2915 26.5666 22.4635 26.5666H23.5855C23.7579 26.5666 23.8975 26.4273 23.8975 26.2556V22.1148L27.0963 26.435C27.1184 26.4663 27.1457 26.4917 27.1754 26.512C27.1764 26.5126 27.1776 26.5135 27.1785 26.5144C27.1849 26.5184 27.1914 26.5224 27.1978 26.5261C27.2009 26.5279 27.2037 26.5292 27.2067 26.5307C27.2113 26.5335 27.2165 26.5359 27.2214 26.5381C27.2267 26.5402 27.2313 26.5424 27.2368 26.5445C27.2398 26.5457 27.2429 26.547 27.246 26.5479C27.2533 26.5506 27.2601 26.5528 27.2671 26.5549C27.2687 26.5549 27.2702 26.5555 27.2717 26.5559C27.2972 26.5626 27.3239 26.5666 27.3515 26.5666H28.4738C28.6462 26.5666 28.7854 26.4273 28.7854 26.2556V19.2837C28.7854 19.1123 28.6462 18.9727 28.4738 18.9727Z"
                  fill="#00B900"
                ></path>
                <path
                  d="M18.0433 24.821H14.9939V19.2843C14.9939 19.1123 14.8543 18.9727 14.6825 18.9727H13.5599C13.3879 18.9727 13.2483 19.1123 13.2483 19.2843V26.2549V26.2555C13.2483 26.3393 13.2817 26.415 13.3354 26.4709C13.3366 26.4724 13.3379 26.4739 13.3397 26.4755C13.3412 26.477 13.3428 26.4782 13.3443 26.4798C13.4004 26.5337 13.4759 26.5669 13.5596 26.5669H13.5599H18.0433C18.2154 26.5669 18.3543 26.427 18.3543 26.2549V25.1326C18.3543 24.9606 18.2154 24.821 18.0433 24.821Z"
                  fill="#00B900"
                ></path>
                <path
                  d="M34.6715 20.7186C34.8435 20.7186 34.9825 20.5793 34.9825 20.4069V19.2846C34.9825 19.1126 34.8435 18.9727 34.6715 18.9727H30.1881H30.1875C30.1034 18.9727 30.0277 19.0064 29.9715 19.0607C29.9703 19.062 29.9688 19.0629 29.9679 19.0641C29.966 19.0659 29.9645 19.0678 29.963 19.0696C29.9096 19.1254 29.8765 19.2009 29.8765 19.2843V19.2846V26.2552V26.2555C29.8765 26.3393 29.9099 26.415 29.9636 26.4709C29.9648 26.4724 29.9663 26.4742 29.9679 26.4755C29.9691 26.477 29.9709 26.4785 29.9725 26.4798C30.0283 26.5334 30.1041 26.5669 30.1875 26.5669H30.1881H34.6715C34.8435 26.5669 34.9825 26.427 34.9825 26.2552V25.1326C34.9825 24.9609 34.8435 24.821 34.6715 24.821H31.6223V23.6426H34.6715C34.8435 23.6426 34.9825 23.503 34.9825 23.3309V22.2086C34.9825 22.0366 34.8435 21.8967 34.6715 21.8967H31.6223V20.7186H34.6715Z"
                  fill="#00B900"
                ></path>
              </svg>
              <p>Continue with LINE</p>
            </div>
            <div className="rigisblock rigisters_body-KakaoTalk">
              <svg width="1.2em" data-e2e="" height="1.2em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 47.001C36.7026 47.001 47 36.7035 47 24.001C47 11.2984 36.7026 1.00098 24 1.00098C11.2975 1.00098 1 11.2984 1 24.001C1 36.7035 11.2975 47.001 24 47.001Z" fill="#FBE300"></path><path d="M24.0825 10C15.6421 10 8.7998 15.3949 8.7998 22.0498C8.7998 26.3524 11.6603 30.1276 15.9633 32.2594C15.7292 33.0668 14.459 37.4532 14.4084 37.7978C14.4084 37.7978 14.378 38.0567 14.5457 38.1555C14.7133 38.2542 14.9105 38.1775 14.9105 38.1775C15.3914 38.1104 20.4862 34.5316 21.3681 33.9101C22.249 34.0349 23.1562 34.0997 24.0825 34.0997C32.523 34.0997 39.3652 28.7049 39.3652 22.0498C39.3652 15.3949 32.523 10 24.0825 10Z" fill="black"></path><path d="M15.6327 26.2563C15.1464 26.2563 14.751 25.8786 14.751 25.4143V20.1763H13.3752C12.8981 20.1763 12.51 19.7889 12.51 19.3129C12.51 18.837 12.8982 18.4496 13.3752 18.4496H17.8901C18.3673 18.4496 18.7554 18.837 18.7554 19.3129C18.7554 19.7889 18.3671 20.1763 17.8901 20.1763H16.5144V25.4143C16.5144 25.8786 16.1189 26.2563 15.6327 26.2563ZM23.364 26.2448C22.9963 26.2448 22.715 26.0955 22.6303 25.8554L22.1937 24.7124L19.5051 24.7123L19.0682 25.856C18.9837 26.0957 18.7026 26.2448 18.3349 26.2448C18.1415 26.245 17.9504 26.2035 17.7745 26.1232C17.5314 26.011 17.2978 25.7027 17.5655 24.8711L19.6745 19.32C19.8231 18.8978 20.2744 18.4628 20.8486 18.4498C21.4245 18.4627 21.8758 18.8978 22.0247 19.3209L24.1328 24.8695C24.4011 25.703 24.1675 26.0115 23.9244 26.1233C23.7485 26.2035 23.5573 26.245 23.364 26.2448C23.364 26.2448 23.3638 26.2448 23.364 26.2448ZM21.73 23.1507L20.8494 20.6489L19.9687 23.1507H21.73ZM25.5518 26.1277C25.0858 26.1277 24.7068 25.765 24.7068 25.3195V19.3313C24.7068 18.8451 25.1106 18.4496 25.6069 18.4496C26.1031 18.4496 26.5069 18.8451 26.5069 19.3313V24.5113H28.3805C28.8465 24.5113 29.2255 24.8739 29.2255 25.3195C29.2255 25.765 28.8465 26.1277 28.3805 26.1277H25.5518ZM30.4502 26.2448C29.9639 26.2448 29.5685 25.8494 29.5685 25.3631V19.3313C29.5685 18.8451 29.9639 18.4496 30.4502 18.4496C30.9364 18.4496 31.3319 18.8451 31.3319 19.3313V21.2264L33.7918 18.7664C33.9183 18.6399 34.0921 18.5703 34.2808 18.5703C34.501 18.5703 34.722 18.6652 34.8876 18.8307C35.042 18.985 35.1342 19.1835 35.1468 19.3896C35.1596 19.5976 35.0904 19.7882 34.9522 19.9265L32.943 21.9354L35.1133 24.8106C35.1834 24.9028 35.2344 25.0081 35.2635 25.1202C35.2925 25.2323 35.299 25.3491 35.2826 25.4638C35.2669 25.5785 35.2285 25.689 35.1698 25.7888C35.1111 25.8886 35.0331 25.9758 34.9405 26.0453C34.788 26.1612 34.6017 26.2237 34.4101 26.2232C34.2735 26.2239 34.1387 26.1925 34.0164 26.1316C33.894 26.0708 33.7877 25.9821 33.7058 25.8728L31.6381 23.133L31.3321 23.439V25.3627C31.3319 25.5965 31.2389 25.8207 31.0735 25.9861C30.9082 26.1515 30.684 26.2445 30.4502 26.2448Z" fill="#FFE812"></path></svg>
              <p>Continue with KakaoTalk</p>
            </div>
          </div>
          <div className="rigisters_node">
            <p>By continuing, you agree to TikTok’s
              <a href="https://www.tiktok.com/legal/terms-of-use?lang=en"> Terms of Service </a>
              and confirm that you have read TikTok’s
              <a href="https://www.tiktok.com/legal/privacy-policy?lang=en">Privacy Policy </a>
            </p>
          </div>
          <div className="rigisters_footer">
            <div>
              Already have an account?
            </div>
            <span onClick={onShow}>Login</span>
          </div>
        </div>
      </div>
      <RigisterUser
        userShow={userShow}
        onUserShow={handlShowUser} />
    </div>
  )
}
export default Rigister;
