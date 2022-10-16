import { CardProps } from "../../files/interface";
import styles from "../../styles/reusable/_card.module.scss";

const Card = ({ children }: CardProps) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
