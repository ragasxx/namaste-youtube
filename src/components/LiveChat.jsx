import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  console.log(chatMessages);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("polling");

      dispatch(
        addMessage({
          name: "Sagar Bhatia",
          message: "hello there",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-2 flex flex-col-reverse w-full h-[500px] overflow-scroll  p-2 border border-black bg-slate-100 rounded-lg">
        {chatMessages.map(({ name, message }) => (
          <ChatMessage name={name} message={message} />
        ))}
      </div>

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "akshay",
                message: liveMessage,
              })
            );
          }}
        >
          <input
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
            type="text"
            className="border border-black w-1/2 rounded-2xl h-8"
          />
          <button
            className="border rounded-2xl border-black h-8 w-16 font-bold bg-gradient-to-r from-slate-300 to bg-gray-500"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
