import { createContext, useContext, useReducer, } from "react";
import { AuthContext } from "./ChatAuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const { currentChatUser } = useContext(AuthContext);
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentChatUser.uid > action.payload.uid
              ? currentChatUser.uid + action.payload.uid
              : action.payload.uid + currentChatUser.uid,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
