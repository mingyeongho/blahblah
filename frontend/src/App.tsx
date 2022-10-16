import Login from "./components/login/Login";
import Card from "./components/reusable/Card";
import styles from "./styles/app.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Card>
        <Login />
      </Card>
    </div>
  );
}

export default App;
