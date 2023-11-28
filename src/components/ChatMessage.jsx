const ChatMessage = ({ name, message }) => {
  return (
    <>
      <div className="flex items-center shadow-sm ">
        <img
          className="h-8"
          alt="user-icon"
          src="https://www.svgrepo.com/show/525577/user-circle.svg"
        />
        <span className="font-bold px-2">{name}</span>
        <span className={`font-mono font-light text-sm text-pink-400`}>
          {message}
        </span>
      </div>
    </>
  );
};
export default ChatMessage;
