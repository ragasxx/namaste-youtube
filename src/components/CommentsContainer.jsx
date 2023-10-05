import React from "react";

const commentsData = [
  {
    name: "sagar",
    text: "hello ji",
    replies: [
      {
        name: "aman",
        text: "theek h ji",
        replies: [
          {
            name: "pawan",
            text: "or aman kya haal",
            replies: [],
          },
        ],
      },
      {
        name: "isha",
        text: "bdiaaaaa hu sagar",
        replies: [],
      },
    ],
  },
  {
    name: "deepak",
    text: "kya hal h bhaiyo ke",
    replies: [
      {
        name: "sagar",
        text: "bdia bhaia",
        replies: [],
      },
    ],
  },
];

const Commentslist = ({ commentsData }) => {
  return commentsData.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <Commentslist commentsData={comment.replies} />
      </div>
    </div>
  ));
};

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex bg-gray-100 my-4">
      <img
        src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
        alt="user image"
        className="h-12 w-12"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments :</h1>
      <div className="mt-5">
        <Commentslist commentsData={commentsData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
