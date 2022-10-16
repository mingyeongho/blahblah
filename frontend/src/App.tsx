import { Route, Routes } from "react-router-dom";
import { io } from "socket.io-client";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Card from "./components/reusable/Card";
import styles from "./styles/app.module.scss";

function App() {
  const socket = io("http://localhost:3000");
  socket.emit("message", "hello server");
  return (
    <div className={styles.app}>
      <Routes>
        <Route
          path={"/"}
          element={
            <Card>
              <Login />
            </Card>
          }
        ></Route>
        <Route
          path={"/:name"}
          element={
            <Card>
              <Profile />
            </Card>
          }
        ></Route>
        <Route
          path="/:name/:chat_no"
          element={
            <Card>
              <Chat />
            </Card>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
