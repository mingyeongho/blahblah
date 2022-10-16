import { ChangeEvent, FormEvent, useState } from "react";
import styles from "../../styles/login/_login.module.scss";

const Login = () => {
  const [name, setName] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("LOGIN", name);
  };

  return (
    <div className={styles.login}>
      <div className={styles.image}>
        <span className="material-icons">person</span>
      </div>
      <form className={styles.input_wrapper} onSubmit={onSubmit}>
        <label htmlFor="name">사용할 이름을 정해주세요.</label>
        <div className={styles.input}>
          <input
            type="text"
            id="name"
            autoComplete="off"
            value={name}
            onChange={onChange}
          />
          <button type="submit">LOGIN</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
