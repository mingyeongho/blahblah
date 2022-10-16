import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../../styles/chat/_chat.module.scss";

const Chat = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { chat_no } = useParams();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onClickBackward = () => {
    navigate(-1);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(message);
    setMessage("");
  };

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
        <span>{chat_no}</span>
      </div>
      <div className={styles.chat_log}></div>
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
