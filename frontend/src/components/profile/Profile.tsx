import { useNavigate, useParams } from "react-router-dom";
import { CHATLIST } from "../../files/constant";
import styles from "../../styles/profile/_profile.module.scss";

const Profile = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const onClickBackward = () => {
    navigate(-1);
  };

  const onClickChatList = (e: any) => {
    if (e.target && e.target.nodeName === "DIV") {
      navigate(`${e.target.innerHTML}`);
    }
  };
  return (
    <div className={styles.profile}>
      <div className={styles.backwards}>
        <span className="material-icons" onClick={onClickBackward}>
          arrow_back
        </span>
      </div>
      <div className={styles.own}>
        <span className="material-icons" id={styles.profile_img}>
          person
        </span>
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.chatlist} onClick={onClickChatList}>
        {CHATLIST.map((chat, idx) => (
          <div className={styles.chat} key={idx}>
            {chat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
