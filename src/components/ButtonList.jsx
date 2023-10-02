import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name={"All"} />
      <Button name={"Gaming"} />
      <Button name={"Tanmay bhat"} />
      <Button name={"Stocks"} />
      <Button name={"New To You"} />
      <Button name={"JJK"} />
      <Button name={"Naruto"} />
      <Button name={"One Piece"} />
    </div>
  );
};

export default ButtonList;
