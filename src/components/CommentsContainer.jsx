import React from "react";

const commentsData = [
  {
    name: "sid",
    text: "Wtsupp",
    replies: [
      {
        name: "ajay",
        text: "all good",
        replies: [
          {
            name: "peejay",
            text: "damn",
            replies: [],
          },
        ],
      },
      {
        name: "lisa",
        text: "happy evening",
        replies: [],
      },
    ],
  },
  {
    name: "denice",
    text: "all good",
    replies: [
      {
        name: "sans",
        text: "yoo",
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
