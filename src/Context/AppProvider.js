import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase/config";
import { Spin } from "antd";
import useFirestore from "../hooks/useFirestore";
import { AuthContext } from "./AuthProvider";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);

  const {
    user: { uid },
  } = React.useContext(AuthContext);

  const roomsCondition = React.useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);

  const rooms = useFirestore("rooms", roomsCondition);

  console.log({ rooms });
  return (
    <AppContext.Provider
      value={{ rooms, isAddRoomVisible, setIsAddRoomVisible }}
    >
      {children}
    </AppContext.Provider>
  );
}
