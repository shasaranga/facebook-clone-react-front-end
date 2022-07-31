import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import {
  AccountCircle,
  ChatBubbleOutline,
  ExpandMoreOutlined,
  NearMe,
  ThumbUp,
} from "@mui/icons-material";
import { Player } from "video-react";

const Post = ({
  profilePic,
  image,
  username,
  timestamp,
  message,
  uploadedImage,
  uploadedVideo,
}) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      {uploadedImage && (
        <div className="post__image">
          <img
            src={uploadedImage}
            alt=""
            id="uploadedImg"
            style={{ width: "50%" }}
          />
        </div>
      )}

      {uploadedVideo && (
        <div className="post__image">
          <Player>
            <source src={uploadedVideo} />
          </Player>
        </div>
      )}

      <div className="post__options">
        <div className="post__option">
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutline />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMe />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircle />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
};

export default Post;
