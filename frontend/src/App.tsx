import { Route, Routes } from "react-router-dom";
import { socket, SocketContext } from "./context/socket";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Card from "./components/reusable/Card";
import styles from "./styles/app.module.scss";

function App() {
  return (
    <SocketContext.Provider value={socket}>
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
            path="/:name/:room_name"
            element={
              <Card>
                <Chat />
              </Card>
            }
          ></Route>
        </Routes>
      </div>
    </SocketContext.Provider>
  );
}

export default App;
