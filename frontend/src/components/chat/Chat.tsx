import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SocketContext } from "../../context/socket";
import { LogProps } from "../../files/interface";
import styles from "../../styles/chat/_chat.module.scss";

const Chat = () => {
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { name, room_name } = useParams();
  const [log, setLog] = useState<LogProps[]>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onClickBackward = () => {
    socket.emit("leave", { room_name });
    navigate(-1);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    socket.emit("message", { name, room_name, message });
    setMessage("");
  };

  useEffect(() => {
    socket.on("broadcast", (arg) => setLog((prev) => [...prev, { ...arg }]));
  }, []);

  useEffect(() => {
    document.getElementById("chat_log")!.scrollTop =
      document.getElementById("chat_log")!.scrollHeight;
  }, [log]);

  return (
    <div className={styles.chat}>
      <div className={styles.backwards}>
        <span
          className="material-icons"
          id={styles.backward}
          onClick={onClickBackward}
        >
          arrow_back
        </span>
        <span>{room_name}</span>
      </div>
      <div className={styles.chat_log} id="chat_log">
        {log.map((cur, idx) => {
          return (
            <div
              key={idx}
              className={cur.name === name ? styles.right : styles.left}
            >
              <span>
                {cur.name === name ? null : `${cur.name} :`} {cur.message}
              </span>
            </div>
          );
        })}
      </div>
      <form className={styles.input_wrapper} onSubmit={onSubmit}>
        <input type="text" value={message} onChange={onChange} />
        <button type="submit">
          <span className="material-icons">send</span>
        </button>
      </form>
    </div>
  );
};

export default Chat;
