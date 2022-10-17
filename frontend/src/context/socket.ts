import { createContext } from "react";
import { io } from "socket.io-client";
import { SOCKET__URL } from "../files/constant";

export const socket = io(SOCKET__URL);
export const SocketContext = createContext(socket);
