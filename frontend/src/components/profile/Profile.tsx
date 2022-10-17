import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SocketContext } from "../../context/socket";
import { CHATLIST } from "../../files/constant";
import styles from "../../styles/profile/_profile.module.scss";

const Profile = () => {
  const socket = useContext(SocketContext);
  const { name } = useParams();
  const navigate = useNavigate();

  const onClickBackward = () => {
    navigate(-1);
  };

  const onClickChatList = (e: any) => {
    const target = e.target;
    if (target && target.nodeName === "DIV") {
      socket.emit("room", { room_name: target.innerHTML });
      navigate(`${target.innerHTML}`);
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
        {CHATLIST.map((chat, idx) => {
          const { title, pk } = chat;
          return (
            <div className={styles.chat} id={`${pk}`} key={idx}>
              {title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
